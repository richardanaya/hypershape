# vrmx - a hypertext for the metaverse

Inspired by [vrml](https://en.wikipedia.org/wiki/VRML), [a-frame](https://aframe.io/), and [htmx](https://htmx.org/) — vrmx is a [hypertext](https://en.wikipedia.org/wiki/Hypertext) for building an interactable server-generated [metaverse](https://en.wikipedia.org/wiki/Metaverse).

### Example

<p align="center">
<img width="830" alt="Screen Shot 2022-10-31 at 7 24 40 PM" src="https://user-images.githubusercontent.com/294042/199145684-134238ec-e71b-4ad0-8316-3418fda02a5f.png">
</p>


```html
<html>

  <head>
    <title>Living Room Metaverse</title>
    <script src="https://unpkg.com/vrmx/dist/vrmx.js"></script>
  </head>
  
  <!-- on the nearest detected ground plane with origin 
  about 3 meters away create a brown table-shaped box 
  with a hat floating above it -->
  <mv-space plane="ground" preferred-distance="3">
    <mv-object y="1" post="/hat-touched" src="hat.gltf" swap="self"></mv-object>
    <mv-object y=".025">
      <geo-box widght="1" height=".05" depth="1">
      <mat-std color="brown">
    <mv-object>
  </mv-space>
        
  <!-- on the nearest detected wall plane create some 
  text to instruct the user what to do -->
  <mv-space plane="wall">
    <mv-object>
      <geo-text>Touch the hat below</geo-text>
      <mat-std color="white">
    </mv-object>
  </mv-space>
    
  <!-- create an anchor point about 3 meters for a help icon -->  
  <mv-space anchor="help" preferred-distance="3">
    <mv-object y="2" post="/help" src="question_mark.gltf" swap="self"></mv-object>
  </mv-space>
    
</html>
```

### Server

```python
@app.post("/hat-touched")
def hat_touched():
    return '<mv-object src="rabbit.gltf">'
    
@app.post("/help")
def help():
    return """
      <mv-object y="1">
        <geo-text>Welcome to a metaverse made with vrmx</geo-text>
        <mat-std color="white">
      </mv-object>
      <mv-object>
        <geo-text>for more infomation go to</geo-text>
        <mat-std color="white">
      </mv-object>
      <mv-object y="-1" href="https://github.com/richardanaya/vrml">
        <geo-text>https://github.com/richardanaya/vrm</geo-text>
        <mat-std color="blue">
      </mv-object>
    """
```


## Vision

### chessboard 

```html
<html>

  <head>
    <title>Office Metaverse</title>
    <script src="https://unpkg.com/vrmx/dist/vrmx.js"></script>
  </head>
    
  <!-- create an anchor point about 3 meters for a chess board
  you play with your friend -->  
  <mv-space anchor="game_table" preferred-distance="3">
    <mv-object post="https://friendchess.com/darryl/board/23vsxvb" trigger="load" swap="self"></mv-object>
  </mv-space>
    
</html>
```
