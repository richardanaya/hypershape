import {
  ACESFilmicToneMapping,
  Clock,
  Object3D,
  PCFSoftShadowMap,
  PerspectiveCamera,
  Raycaster,
  Scene,
  SRGBColorSpace,
  Vector2,
  WebGLRenderer,
  XRHandSpace,
} from "three";
import * as THREE from "three";
import CameraControls from "camera-controls";

CameraControls.install({ THREE: THREE });

const clock = new Clock();

let camera!: PerspectiveCamera, scene!: Scene, renderer!: WebGLRenderer;

let controls!: CameraControls;

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
  camera.position.set(0, 1.75, 3);

  //

  renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.useLegacyLights = false;
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFSoftShadowMap;
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.xr.enabled = true;
  container.appendChild(renderer.domElement);

  controls = new CameraControls(camera, renderer.domElement);
  controls.mouseButtons.left = CameraControls.ACTION.TRUCK;
  controls.mouseButtons.right = CameraControls.ACTION.ROTATE;
  controls.mouseButtons.wheel = CameraControls.ACTION.DOLLY;
  controls.mouseButtons.middle = CameraControls.ACTION.TRUCK;
  controls.maxDistance = 10;
  controls.minDistance = 0.01;
  controls.maxPolarAngle = Math.PI / 2;
  controls.verticalDragToForward = true;
  controls.infinityDolly = false;

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

// switch the behavior by the modifier key press
const keyState = {
  shiftRight: false,
  shiftLeft: false,
  controlRight: false,
  controlLeft: false,
};

const updateConfig = () => {
  if (keyState.shiftRight || keyState.shiftLeft) {
    controls.mouseButtons.left = CameraControls.ACTION.ROTATE;
  } else if (keyState.controlRight || keyState.controlLeft) {
    controls.mouseButtons.left = CameraControls.ACTION.DOLLY;
  } else {
    controls.mouseButtons.left = CameraControls.ACTION.TRUCK;
  }
};

document.addEventListener("keydown", (event) => {
  if (event.code === "ShiftRight") keyState.shiftRight = true;
  if (event.code === "ShiftLeft") keyState.shiftLeft = true;
  if (event.code === "ControlRight") keyState.controlRight = true;
  if (event.code === "ControlLeft") keyState.controlLeft = true;
  updateConfig();
});

document.addEventListener("keyup", (event) => {
  if (event.code === "ShiftRight") keyState.shiftRight = false;
  if (event.code === "ShiftLeft") keyState.shiftLeft = false;
  if (event.code === "ControlRight") keyState.controlRight = false;
  if (event.code === "ControlLeft") keyState.controlLeft = false;
  updateConfig();
});

function render() {
  const delta = clock.getDelta();
  controls.update(delta);
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
      for (const intersect of intersects) {
        const obj: Object3D = intersect.object;
        const listener = this.registeredListeners.get(obj);
        if (listener) {
          listener();
        } else {
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
