import {
  ACESFilmicToneMapping,
  BufferGeometry,
  DirectionalLight,
  Line,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  sRGBEncoding,
  Vector3,
  WebGLRenderer,
  XRHandSpace,
} from "three";

import { ARButton } from "three/examples/jsm/webxr/ARButton.js";
import { XRControllerModelFactory } from "three/examples/jsm/webxr/XRControllerModelFactory.js";
import { XRHandModelFactory } from "three/examples/jsm/webxr/XRHandModelFactory.js";

let hand1, hand2;
let controller1, controller2;
let controllerGrip1, controllerGrip2;

let scene!: Scene;

// add fullscreen canvas
const canvas = document.createElement("canvas");
canvas.id = "canvas";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
//set css
document.body.style.margin = "0";
document.body.style.overflow = "hidden";
document.body.style.backgroundColor = "#000000";

export function getWorld() {
  if (scene === undefined) {
    // create threejs renderer and scene and animation loop
    const renderer = new WebGLRenderer({ canvas: canvas });
    // physical based rendering
    renderer.physicallyCorrectLights = true;
    renderer.outputEncoding = sRGBEncoding;
    renderer.toneMapping = ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = PCFSoftShadowMap;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.xr.enabled = true;

    document.body.appendChild(
      ARButton.createButton(renderer, {
        requiredFeatures: ["plane-detection"],
      })
    );

    scene = new Scene();

    // add global illumination

    // add direction light

    const light = new DirectionalLight(0xffffff, 10.0);
    light.position.set(0, 1, 0);
    light.castShadow = true;
    light.shadow.mapSize.width = 2048;
    light.shadow.mapSize.height = 2048;
    light.shadow.camera.near = 0.5;
    light.shadow.camera.far = 500;
    scene.add(light);

    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // controllers

    controller1 = renderer.xr.getController(0);
    scene.add(controller1);

    controller2 = renderer.xr.getController(1);
    scene.add(controller2);

    const controllerModelFactory = new XRControllerModelFactory();
    const handModelFactory = new XRHandModelFactory();

    // Hand 1
    controllerGrip1 = renderer.xr.getControllerGrip(0);
    controllerGrip1.add(
      controllerModelFactory.createControllerModel(controllerGrip1)
    );
    scene.add(controllerGrip1);

    hand1 = renderer.xr.getHand(0);
    hand1.add(handModelFactory.createHandModel(hand1));

    scene.add(hand1);

    // Hand 2
    controllerGrip2 = renderer.xr.getControllerGrip(1);
    controllerGrip2.add(
      controllerModelFactory.createControllerModel(controllerGrip2)
    );
    scene.add(controllerGrip2);

    hand2 = renderer.xr.getHand(1);
    hand2.add(handModelFactory.createHandModel(hand2));
    scene.add(hand2);

    //

    const geometry = new BufferGeometry().setFromPoints([
      new Vector3(0, 0, 0),
      new Vector3(0, 0, -1),
    ]);

    const line = new Line(geometry);
    line.name = "line";
    line.scale.z = 5;

    controller1.add(line.clone());
    controller2.add(line.clone());

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }
  return scene;
}

export type Hand = XRHandSpace;
export type HandMoveHandler = (hands: Hand[]) => void;

const handMoveHandlers: HandMoveHandler[] = [];

export function addHandMoveHandler(onHandMove: HandMoveHandler) {
  handMoveHandlers.push(onHandMove);
}
