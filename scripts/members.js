var members = [{
    pic: "https://unsplash.it/500/500", name: "Justin Bieber"
}, {
    pic: "https://unsplash.it/500/500", name: "Justin Bieber"
}, {
    pic: "https://unsplash.it/500/500", name: "Justin Bieber"
}, {
    pic: "https://unsplash.it/500/500", name: "Justin Bieber"
}, {
    pic: "https://unsplash.it/500/500", name: "Justin Bieber"
}, {
    pic: "https://unsplash.it/500/500", name: "Justin Bieber"
}, {
    pic: "https://unsplash.it/500/500", name: "Justin Bieber"
}, {
    pic: "https://unsplash.it/500/500", name: "Justin Bieber"
}];

var vm = new Vue({
    el: '#members',
    data: {ms: members},
    created: function () {
        console.log(this.ms);
    }
});


