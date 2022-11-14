
import {
  ACESFilmicToneMapping,
  BufferGeometry,
  HemisphereLight,
  Line,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  sRGBEncoding,
  Vector3,
  WebGLRenderer,
  XRHandSpace,
  XRTargetRaySpace,
} from "three";

import { ARButton } from "three/examples/jsm/webxr/ARButton.js";

let controller1!:XRTargetRaySpace, controller2!:XRTargetRaySpace;

let camera!:PerspectiveCamera, scene!:Scene, renderer!:WebGLRenderer;

function init() {

  const container = document.createElement( 'div' );
  document.body.appendChild( container );

  scene = new Scene();

  camera = new PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 20 );

  const light = new HemisphereLight( 0xffffff, 0xbbbbff, 1 );
  light.position.set( 0.5, 1, 0.25 );
  scene.add( light );

  //

  renderer = new WebGLRenderer( { antialias: true, alpha: true } );
  renderer.physicallyCorrectLights = true;
  renderer.outputEncoding = sRGBEncoding;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.xr.enabled = true;
  container.appendChild( renderer.domElement );


  document.body.appendChild( ARButton.createButton( renderer ) );

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

  window.addEventListener( 'resize', onWindowResize );

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {

  renderer.setAnimationLoop( render );

}

function render() {

  renderer.render( scene, camera );

}

export function getWorld(){
  if(!scene){
    init();
    animate();
  }
  return scene;
}

/*import {
  ACESFilmicToneMapping,
  BoxGeometry,
  BufferGeometry,
  DirectionalLight,
  Line,
  Mesh,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Scene,
  sRGBEncoding,
  Vector3,
  WebGLRenderer,
  XRHandSpace,
} from "three";

import { ARButton } from "three/examples/jsm/webxr/ARButton.js";


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

    // add red box
    
    let geometry = new BoxGeometry(0.1, 0.1, 0.1);
    const material = new MeshStandardMaterial({ color: 0xff0000 });
    const mesh = new Mesh(geometry, material);
    mesh.position.set(0, 0, -0.5);
    mesh.receiveShadow = true;
    mesh.castShadow = true;
    scene.add(mesh);



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

    

    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }
  return scene;
}
*/

export type Hand = XRHandSpace;
export type HandMoveHandler = (hands: Hand[]) => void;

const handMoveHandlers: HandMoveHandler[] = [];

export function addHandMoveHandler(onHandMove: HandMoveHandler) {
  handMoveHandlers.push(onHandMove);
}