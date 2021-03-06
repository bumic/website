const members = [
    {
        pic: "", name: ""
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
            this.ms = json.members
                .sort((a, b) => {
                    return (a.first_name.toLowerCase() > b.first_name.toLowerCase()) ? 1 : -1;
                })
                .map(t => ({
                    "name": t.first_name + " " + t.last_name + " ("+t.title+")",
                    "firstName": t.first_name,
                    "pic": `image/members/square2/${t.pic}`,
                    "bio": t.bio,
                    "funFact": t.fun_fact,
                    "year": t.year,
                    "link": t.link
                }));
            return this.ms
        })
    }
});