# vrmx - a hypertext for the metaverse

Inspired by [vrml](https://en.wikipedia.org/wiki/VRML), [a-frame](https://aframe.io/), and [htmx](https://htmx.org/), vrmx is a [hypertext](https://en.wikipedia.org/wiki/Hypertext) for building an interactable server-generated [metaverse](https://en.wikipedia.org/wiki/Metaverse).

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
@app.post("/hat-touched")
def hat_touched():
    return '<mv-object src="rabit.gltf">'
```
