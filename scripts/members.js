const members = [
    {
        pic: "https://unsplash.it/300/300", name: "Justin Bieber"
    }
];

const vm = new Vue({
    el: '#members',
    data: {ms: members},
    mounted: function () {
        let m = fetch("members/members.json").then(resp => {
            return resp.json()
        }).then(json => {
            // Todo: Check for file not file
            // Todo: Add adviser's pictures.
            this.ms = json.members.map(t => ({
                "name": t.first_name + " " + t.last_name,
                "pic": `image/members/${t.pic}`
            }));
            return this.ms
        })
    }
});