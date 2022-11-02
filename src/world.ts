import {ACESFilmicToneMapping, DirectionalLight, PCFSoftShadowMap, PerspectiveCamera, Scene, sRGBEncoding, WebGLRenderer} from "three";

let scene!: Scene;

// add fullscreen canvas   
const canvas = document.createElement('canvas')
canvas.id = 'canvas'
canvas.width = window.innerWidth
canvas.height = window.innerHeight
document.body.appendChild(canvas)
//set css
document.body.style.margin = '0'
document.body.style.overflow = 'hidden'
document.body.style.backgroundColor = '#000000'

export function getWorld() {
    if(scene === undefined) {
        // create threejs renderer and scene and animation loop
        const renderer = new WebGLRenderer({ canvas: canvas })
        // physical based rendering
        renderer.physicallyCorrectLights = true
        renderer.outputEncoding = sRGBEncoding
        renderer.toneMapping = ACESFilmicToneMapping
        renderer.toneMappingExposure = 1.0
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = PCFSoftShadowMap

        scene = new Scene()

        // add global illumination

        
        // add direction light

        const light = new DirectionalLight(0xffffff, 10.0)
        light.position.set(0, 1, 0)
        light.castShadow = true
        light.shadow.mapSize.width = 2048
        light.shadow.mapSize.height = 2048
        light.shadow.camera.near = 0.5
        light.shadow.camera.far = 500
        scene.add(light)


        const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        camera.position.z = 5
        
        const animate = function () {
            requestAnimationFrame(animate)
            renderer.render(scene, camera)
        }   
        animate()
    } 
    return scene
}