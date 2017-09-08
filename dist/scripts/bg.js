'use strict';

function rand_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //[min, max)
}

function rand_float(min, max) {
    return Math.random() * (max - min) + min;
}

function rand_bg(index) {
    var bg = ['nhqip', '3fp01', '3fp00', 'yhojm', 'yhojp', 'yhojt', 'yhojw', 'yhojx', 'yhojy', 'yhoj3', 'yhoj4', 'yhoj6', 'yhoj7', 'yhoj9'];
    // bg = halloweeen //if date ==
    // bg = holidays   // if date ==
    // bg = valentines // if date ==
    return bg[index];
}

// function get_date() {
//   var today = new Date();
//   var dd = today.getDate();
//   var mm = today.getMonth();
//   var yyyy = today.getFullYear();

//   return
// }

// Can customize color pattern:
// https://www.npmjs.com/package/trianglify
var pattern = Trianglify({
    height: window.innerHeight,
    width: window.innerWidth,
    seed: rand_bg(rand_int(0, 14)),
    x_colors: 'random',
    y_colors: 'match_x',
    variance: rand_float(.7, 1),
    stroke_width: rand_float(1, 5),
    cell_size: rand_int(40, 200)
});

// var today = new Date();

// if today.getMonth() == 6 {
//   pattern = Trianglify({
//   color_function: function(x, y) {
//     return  'hsl('+Math.floor(Math.abs(x*y)*360)+',80%,60%)';
//   };
//   height: window.innerHeight,
//   width: window.innerWidth,
//   seed: rand_bg(rand_int(0,14)),
//   x_colors: 'random',
//   y_colors: 'match_x',
//   variance: rand_float(.7, 1),
//   stroke_width: rand_float(1, 5),
//   cell_size: rand_int(40, 200)});
// }
//
// document.body.querySelector("#home").style.backgroundSize = "cover";
// document.body.querySelector("#home").style.backgroundImage =  "url(" + pattern.png() + ")";
// document.body.querySelector("#home").style.backgroundAttachment = "fixed";
// // document.body.querySelector("#home").style.opacity = 0.9;

var makeBackground = function makeBackground() {
    return Trianglify({
        height: window.innerHeight,
        width: window.innerWidth,
        seed: rand_bg(rand_int(0, 14)),
        x_colors: 'random',
        y_colors: 'match_x',
        variance: rand_float(.7, 1),
        stroke_width: rand_float(1, 5),
        cell_size: rand_int(40, 200)
    });
};

var makeBackgroundFor = function makeBackgroundFor(elements) {
    return elements.forEach(function (t) {
        var el = document.body.querySelector(t);
        el.style.backgroundSize = "cover";
        el.style.backgroundImage = "url(" + makeBackground().png() + ")";
        el.style.backgroundAttachment = "fixed";
    });
};

makeBackgroundFor(["#home", "#team-pic"]);

// One for the nav bar fading in


window.addEventListener("scroll", function () {
    if (window.scrollY > 800) {
        // Make this transition to fade in not abruptly does this.
        $("#navbar").css("background-color", "rgba(255,255,255,0.96)");
    } else {
        $("#navbar").css("background-color", "rgba(255,255,255,0)");
    }
});
//# sourceMappingURL=bg.js.map