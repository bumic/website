function rand_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //[min, max)
}


function rand_float(min, max) {
  return Math.random() * (max - min) + min;
}


function rand_bg(index) {
  bg = ['nhqip', '3fp01', 'yhojm', 'random']
  return bg[index]
}


// Can customize color pattern:
// https://www.npmjs.com/package/trianglify
var pattern = Trianglify({
  height: window.innerHeight,
  width: window.innerWidth,
  // seed: rand_bg(rand_int(0,4)),
  x_colors: 'random',
  y_colors: 'match_x',
  variance: rand_float(.7, 1),
  stroke_width: rand_float(1, 5),
  cell_size: rand_int(40, 200)});


document.body.querySelector("#home").style.backgroundSize = "cover";
document.body.querySelector("#home").style.backgroundImage =  "url(" + pattern.png() + ")";
document.body.querySelector("#home").style.backgroundAttachment = "fixed";
// document.body.querySelector("#home").style.opacity = 0.9;
