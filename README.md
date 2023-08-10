## HyperShape

```html
<script src="https://unpkg.com/hypershape/dist/hypershape.js"></script>
```

### Hypertext for the metaverse

Inspired by [vrml](https://en.wikipedia.org/wiki/VRML), [a-frame](https://aframe.io/), and [htmx](https://htmx.org/) — hypershape is a [hypertext](https://en.wikipedia.org/wiki/Hypertext) for building an interactable server-generated [metaverse](https://en.wikipedia.org/wiki/Metaverse).

See a [demo](https://richardanaya.github.io/hypershape/dist/)

The markup language shall be known as `MHTL` (metaverse hypertext language)

### What made Web 1.0 great

Two key elements of HTML unleashed the power of Web 1.0

- `<a>` - The anchor element created the world wide web, it allowed a network of hypermedia servers to be traversed by a hypermedia client
- `<form>` - The form element allowed apps to be created on the world wide web by being a control that could submit data to server backends.

HyperShape aims to capitalize on these two ideas as it's foundations to make a metaverse that is traversable and modifiable.

### Principles

- WebGPU support by default
- Support PBR only
- Hypertext only behavior via MHTL
- Be future forward for augmented reality

### MHTL Elements

#### Spatial elements
* `mv-space` - container for the root space which content and controls are attached to
* `mv-hud` - container for the root space which content and controls are attached to in the view of the camera
* `mv-camera` - allows you specify the position of the camera in space

#### Hypermedia control elements
* `mv-link` - allows you define elements that navigate the browser to a different url
* `mv-form` - allows you to submit data to hypermedia servers and either navigate the whole page or replace a small part of it with the returned hypertext
* `mv-input` - special controls that add data to the form data to be submitted
* `mv-target` - allows you to specify a target where content returned from the form will be placed

#### Content Elements
* `mv-model` - 3D model to add to a space
* `mv-label` - single line of text to add to a space
* `mv-light` - lightto add to a space
* `mv-water` - dynamic water element to add to a space

## Learn Hypershape in 5 examples

### 3D model positioned in space that links to another page

```html
<mv-space>
  <mv-link href="https://en.wikipedia.org/wiki/Fox">
    <mv-model
      src="https://richardanaya.github.io/hypershape/dist/Fox.gltf"
      position="0,.1,0"
      scale=".005"
      rotation="0,45,0"
    ></mv-model>
  </mv-link>
</mv-space>
```


# Art

![image](https://github.com/richardanaya/hypershape/assets/294042/8da712bf-ce75-48b5-ac14-4ff8a759f146)

