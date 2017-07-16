// Create the Trianglify image
var pattern = Trianglify({
  height: window.innerHeight,
  width: window.innerWidth,
  cell_size: 80});

document.body.style.backgroundSize = "cover";
document.body.style.backgroundImage =  "url(" + pattern.png() + ")";
document.body.style.backgroundAttachment = "fixed";