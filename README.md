## HyperShape

```html
<script src="https://unpkg.com/hypershape/dist/hypershape.js"></script>
```

### Hypertext for the metaverse

Inspired by [vrml](https://en.wikipedia.org/wiki/VRML) and [htmx](https://htmx.org/) — HyperShape is a [hypertext](https://en.wikipedia.org/wiki/Hypertext) for building an interactable server-generated [metaverse](https://en.wikipedia.org/wiki/Metaverse).

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
* `mv-light` - light to add to a space
* `mv-water` - dynamic water element to add to a space

## Learn HyperShape in 4 examples

### 3D model positioned in space that links to another page

<img width="404" alt="Screenshot 2023-08-10 at 2 37 51 PM" src="https://github.com/richardanaya/hypershape/assets/294042/152190d2-aeb6-455d-81bf-8dd213abcefc">

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

Play with the [demo](https://hypershape.deno.dev/example_1).

### An ocean and HDRI environment light with a camera looking at the horizon

<img width="681" alt="Screenshot 2023-08-10 at 2 48 54 PM" src="https://github.com/richardanaya/hypershape/assets/294042/29059b04-efba-4251-bcdc-fcc90bb8449d">

```html
<mv-space>
  <mv-camera position="0,1.75,3" lookat="0,1.75,0"></mv-camera>
  <mv-light
    type="hdri"
    src="https://richardanaya.github.io/hypershape/dist/assets/kloofendal_43d_clear_puresky_4k.hdr"
    backkground="true"
  ></mv-light>
  <mv-water></mv-water>
</mv-space>
```

Play with the [demo](https://hypershape.deno.dev/example_2).

### A login screen in a HUD

<img width="735" alt="Screenshot 2023-08-10 at 3 02 47 PM" src="https://github.com/richardanaya/hypershape/assets/294042/b3d6b1d7-a8d8-4262-a820-c1c0699b4052">

```html
<mv-hud>
  <mv-form action="/login">
    <mv-input type="text" position="0,.2,0" name="email"></mv-input>
    <mv-label position=".1,.2,0" text="Email"></mv-label>
    <mv-input type="password" position="0,-0,0" name="password"></mv-input>
    <mv-label position=".1,0,0" text="Password"></mv-label>
    <mv-input type="submit" position="0,-.2,0"></mv-input>
    <mv-label position=".1,-.2,0" text="Login"></mv-label>
  </mv-form>
</mv-hud>
```

Play with the [demo](https://hypershape.deno.dev/example_3).

### Replace content with interactive buttons

<img width="611" alt="Screenshot 2023-08-10 at 3 47 30 PM" src="https://github.com/richardanaya/hypershape/assets/294042/a1d9447c-742d-4e41-9404-460d23b24c8d">


```html
<mv-space>
  <mv-target id="my_object">
    <mv-model
          src="https://richardanaya.github.io/hypershape/dist/Fox.gltf"
          position="0,.1,0"
          scale=".005"
          rotation="0,45,0"
        ></mv-model>
  </mv-target>
</mv-space>
<mv-hud>
  <mv-form action="/avocado" target="my_object">
    <mv-input type="submit" position="0,0,0"></mv-input>
    <mv-label position=".1,0,0" text="Avocado"></mv-label>
  </mv-form>
  <mv-form action="/fox" target="my_object">
    <mv-input type="submit" position="0,-.2,0"></mv-input>
    <mv-label position=".1,.-2,0" text="Fox"></mv-label>
  </mv-form>
</mv-hud>
```

Play with the [demo](https://hypershape.deno.dev/example_4).

# Art

![image](https://github.com/richardanaya/hypershape/assets/294042/8da712bf-ce75-48b5-ac14-4ff8a759f146)

