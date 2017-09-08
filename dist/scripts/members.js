"use strict";

var members = [{
    pic: "https://unsplash.it/300/300", name: "Justin Bieber"
}];

var vm = new Vue({
    el: '#members',
    data: { ms: members },
    mounted: function mounted() {
        var _this = this;

        var m = fetch("members/members.json").then(function (resp) {
            return resp.json();
        }).then(function (json) {
            // Todo: Check for file not file
            // Todo: Add adviser's pictures.
            _this.ms = json.members.sort(function (a, b) {
                return a.first_name.toLowerCase() > b.first_name.toLowerCase() ? 1 : -1;
            }).map(function (t) {
                return {
                    "name": t.first_name + " " + t.last_name,
                    "firstName": t.first_name,
                    "pic": "image/members/square2/" + t.pic,
                    "bio": t.bio,
                    "funFact": t.fun_fact,
                    "year": t.year
                };
            });
            return _this.ms;
        });
    }
});
//# sourceMappingURL=members.js.map