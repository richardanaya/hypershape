# vrmx - a hypertext for the metaverse

Inspired by [VRML](https://en.wikipedia.org/wiki/VRML) and [htmx](https://htmx.org/), VRMX is a hypertext for building interactable server-generated metaverses.

```html
<html>
  <head>
    <title>My World</title>
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
