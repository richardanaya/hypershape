import {
  ACESFilmicToneMapping,
  BufferGeometry,
  HemisphereLight,
  Line,
  Object3D,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Raycaster,
  Scene,
  sRGBEncoding,
  Vector2,
  Vector3,
  WebGLRenderer,
  XRHandSpace,
  XRTargetRaySpace,
} from "three";

import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

let controller1!: XRTargetRaySpace, controller2!: XRTargetRaySpace;

let camera!: PerspectiveCamera, scene!: Scene, renderer!: WebGLRenderer;

function init() {
  const container = document.createElement("div");
  document.body.appendChild(container);

  scene = new Scene();

  camera = new PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    20
  );

  const light = new HemisphereLight(0xffffff, 0xbbbbff, 1);
  light.position.set(0.5, 1, 0.25);
  scene.add(light);

  //

  renderer = new WebGLRenderer({ antialias: true, alpha: true });
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = sRGBEncoding;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.xr.enabled = true;
  container.appendChild(renderer.domElement);

  document.body.appendChild(ARButton.createButton(renderer));

  controller1 = renderer.xr.getController(0);
  scene.add(controller1);

  controller2 = renderer.xr.getController(1);
  scene.add(controller2);

  const geometry = new BufferGeometry().setFromPoints([
    new Vector3(0, 0, 0),
    new Vector3(0, 0, -1),
  ]);

  const line = new Line(geometry);
  line.name = "line";
  line.scale.z = 5;

  controller1.add(line.clone());
  controller2.add(line.clone());

  //

  window.addEventListener("resize", onWindowResize);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

//

function animate() {
  renderer.setAnimationLoop(render);
}

function render() {
  renderer.render(scene, camera);
}

export class MetaverseWorld {
  scene: Scene;

  registeredListeners: Map<Object3D, () => void> = new Map();

  constructor(scene: Scene) {
    this.scene = scene;

    //setup raycasters
    const raycaster = new Raycaster();
    const mouse = new Vector2();
    const intersectObjects = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const objs = this.registeredListeners.keys();
      const intersects = raycaster.intersectObjects(Array.from(objs));
      return intersects;
    };
    window.addEventListener("click", (event) => {
      const intersects = intersectObjects(event);
      debugger;
      for (const intersect of intersects) {
        const obj: Object3D = intersect.object;
        const listener = this.registeredListeners.get(obj);
        if (listener) {
          listener();
        } else {
          debugger;
          // itereate through all parents until found registered
          let parent = obj.parent;
          while (parent !== null) {
            const listener = this.registeredListeners.get(parent);
            if (listener) {
              listener();
              break;
            }
            parent = parent.parent;
          }
        }
      }
    });
  }

  registerInteractiveObject(obj: Object3D, onInteract: () => void) {
    this.registeredListeners.set(obj, onInteract);
  }
}

let globalWorld: MetaverseWorld;

export function getWorld() {
  if (!scene) {
    init();
    animate();
  }
  if (!globalWorld) {
    globalWorld = new MetaverseWorld(scene);
  }

  return globalWorld;
}

export type Hand = XRHandSpace;
export type HandMoveHandler = (hands: Hand[]) => void;

const handMoveHandlers: HandMoveHandler[] = [];

export function addHandMoveHandler(onHandMove: HandMoveHandler) {
  handMoveHandlers.push(onHandMove);
}
