## HyperShape

```html
<script src="https://unpkg.com/hypershape/dist/hypershape.js"></script>
```

### Hypertext for the metaverse

Inspired by [vrml](https://en.wikipedia.org/wiki/VRML) and [htmx](https://htmx.org/) — HyperShape is a [hypertext](https://en.wikipedia.org/wiki/Hypertext) for building an interactable server-generated [metaverse](https://en.wikipedia.org/wiki/Metaverse).

See a [demo](https://hypershape.deno.dev/)

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

- `mv-space` - container for the root space which content and controls are attached to
  - `id` - identifier attribute used for targeting by forms
- `mv-hud` - container for the root space which content and controls are attached to in the view of the camera
- `mv-camera` - allows you specify the position of the camera in space
  - `position` - positioning attribute for camera (e.g. `1,1,1`)
  - `lookat` - attribute to set a target for camera to look at (e.g. `1,1,1`)

#### Hypermedia control elements

- `mv-link` - allows you define elements that navigate the browser to a different url
  - `href` - hypertext reference attribute that specifies a url child objects will navigate the browser to when clicked
- `mv-form` - allows you to submit data to hypermedia servers and either navigate the whole page or replace a small part of it with the returned hypertext
  - `action` - url attribute where the form data will be sent to either as url query parameters for `GET` requests or form data for `POST` requests
  - `method` - http method attribute to be used for the action `GET`/`POST` (default `GET`)
  - `timout` - attribute used for setting a timeout (in milliseconds) after which the form will auto submit
  - `timer` - attribute used for setting a timer interval (in milliseconds) which the form will auto submit each interval
  - `target` - attribute used for targeting the ID of the element you want to replace the inner dom of instead of a full screen navigation
- `mv-input` - special controls that add data to the form data to be submitted
  - `type` - input type attribute (`text`,`password`,`checkbox`)
  - `name` - name attribute that will determine the name to be used in form submission data
  - `position` - positioning attribute for 3D object (e.g. `1,1,1`)
  - `rotation` - rotation attribute for 3D object in degrees (e.g. `0,90,0`)
  - `scale` - scaling attribute for 3D object (e.g. `1,1,1` or `.4`)
- `mv-target` - allows you to specify a target where content returned from the form will be placed
  - `id` - identifier attribute used for targeting by forms

#### Content Elements

- `mv-model` - 3D model to add to a space
  - `src` - attribute for specifing the GLTF file to show
  - `position` - positioning attribute for 3D object (e.g. `1,1,1`)
  - `rotation` - rotation attribute for 3D object in degrees (e.g. `0,90,0`)
  - `scale` - scaling attribute for 3D object (e.g. `1,1,1` or `.4`)
- `mv-label` - single line of text to add to a space
  - `text` - text attribute that determines the text to show
  - `position` - positioning attribute for 3D object (e.g. `1,1,1`)
  - `rotation` - rotation attribute for 3D object in degrees (e.g. `0,90,0`)
  - `scale` - scaling attribute for 3D object (e.g. `1,1,1` or `.4`)
- `mv-light` - light to add to a space
  - `type` - light type attribute to specify the kind of light to use `ambient` or "`hdri`
  - `src` - src attribute for specifing hdri to use
  - `background` - boolean attribute for specifing if we ant hdri to show as background too
  - `color` - color attribute for ambient light
  - `intensity` - intensity for ambient light (default `1`)
- `mv-water` - dynamic water element to add to a space

## Project status

- basic elements are implemented and functional
- want to add less distructive changes to 3D scene when dom changes
- want to add more lights
- want to support more 3D formats
- want to add better input controls
- want to add VR support with teleport

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
    <mv-input type="password" position="0,0,0" name="password"></mv-input>
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
<mv-space id="my_object">
  <mv-model
    src="https://richardanaya.github.io/hypershape/dist/Fox.gltf"
    position="0,.1,0"
    scale=".005"
    rotation="0,45,0"
  ></mv-model>
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
