import {BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer} from "three";

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
        scene = new Scene()
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