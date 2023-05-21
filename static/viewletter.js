// const url = 'https://134.122.109.198:31655/message/4'
const url = '/message/3'
fetch(url, {
        method: 'GET',
        credentials: "include",
}).then((data) => {
        console.log(data)
})
