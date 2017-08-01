var members = [
    {
        pic: "https://unsplash.it/300/300", name: "Justin Bieber"
    }
];

var vm = new Vue({
    el: '#members',
    data: {ms: members},
    mounted: function () {
        var m = fetch("/data/members.json")
            .then(
                resp => resp.json()
            ).then(
                json => {
                    this.ms = json.members.map(function (t, a) {
                        if (t.pic) {
                            var p = `image/members/${t.pic}`;
                            fetch(p).catch((e) => {
                                p = "https://unsplash.it/500/500"
                            });
                        } else {
                            var p = "https://unsplash.it/500/500";
                        }
                        return ({
                            "name": t.first_name + " " + t.last_name,
                            "pic": p
                        });
                    });
                })
        ;
    }
});


