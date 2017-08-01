"use strict";

var members = [{
    pic: "https://unsplash.it/300/300", name: "Justin Bieber"
}];

var vm = new Vue({
    el: '#members',
    data: {ms: members},
    mounted: function mounted() {
        var _this = this;

        var m = fetch("/data/members.json").then(function (resp) {
            return resp.json();
        }).then(function (json) {
            _this.ms = json.members.map(function (t) {
                return {
                    "name": t.first_name + " " + t.last_name,
                    "pic": "image/members/" + t.pic
                };
            });
        });
    }
});
//# sourceMappingURL=members.js.map