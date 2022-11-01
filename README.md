# vrmx - a hypertext for the metaverse

Inspired by [vrml](https://en.wikipedia.org/wiki/VRML), [a-frame](https://aframe.io/), and [htmx](https://htmx.org/), `vrmx` is a hypertext for building interactable server-generated metaverses.

```html
<html>
  <head>
    <title>Metaverse</title>
    <script src="https://unpkg.com/vrmx/dist/index.js"></script>
  </head>
  <mv-world>
    <mv-object post="/hat-touched" src="hat.gltf" swap="self">
  </mv-world>
</html>
```

```python
@app.get("/hat-touched")
def hat_touched():
    return '<mv-object src="rabit.gltf">'
```
