# VRMX - A Hypertext for the Metaverse

Inspired by [VRML](https://en.wikipedia.org/wiki/VRML) and [HTMX](https://htmx.org/), VRMX is a hypertext for building interactable server-generated metaverses.

```html
<script src="https://unpkg.com/vrmx/dist/index.js"></script>
<mv-world>
  <mv-object post="/hat-touched" src="hat.gltf" swap="self">
</mv-world>
```

```python
@app.get("/hat-touched")
def hat_touched():
    return '<mv-object src="rabit.gltf">'
```
