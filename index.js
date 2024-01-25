document.addEventListener("DOMContentLoaded", async () => {
    async function getData(url) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }


    const activity = document.querySelector(".activity");
    const ipElement = document.querySelector(".ip");

    getData("https://www.boredapi.com/api/activity").then((data) => {
        activity.innerHTML = data.activity; // JSON data parsed by `data.json()` call
    });

    fetch("https://api.ipify.org?format=json", {method: "GET"}).then((response => {
        response.json().then(res => {
            ipElement.innerHTML = res.ip
        })
    }))

});



