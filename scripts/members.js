const members = [
    {
        pic: "https://unsplash.it/300/300", name: "Justin Bieber"
    }
];

const vm = new Vue({
    el: '#members',
    data: {ms: members},
    mounted: function () {
        let m = fetch("/data/members.json")
            .then(
                resp => resp.json()
            ).then(
                json => {
                    this.ms = json.members.map(function (t) {
                        return ({
                            "name": t.first_name + " " + t.last_name,
                            "pic": `image/members/${t.pic}`
                        });
                    });
                })
        ;
    }
});


