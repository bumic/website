function rand_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //[min, max)
}

function rand_float(min, max) {
    return Math.random() * (max - min) + min;
}

function rand_bg(index) {
    let bg = ['nhqip', '3fp01', '3fp00', 'yhojm', 'yhojp', 'yhojt',
        'yhojw', 'yhojx', 'yhojy', 'yhoj3', 'yhoj4', 'yhoj6',
        'yhoj7', 'yhoj9'];
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


const makeBackground = function () {
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

// document.body.querySelector("#home").style.opacity = 0.9;

const makeBackgroundFor = function (elements) {
    return elements.forEach(function (t) {
        let el = document.body.querySelector(t);
        el.style.backgroundSize = "cover";
        el.style.backgroundImage = "url(" + makeBackground().png() + ")";
        el.style.backgroundAttachment = "fixed";
    })
};

makeBackgroundFor(["#home", "#projects-pic", "#teams-pic"]);