document.addEventListener("DOMContentLoaded", async () => {
    async function getData(url) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors",
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        return response.json(); // parses JSON response into native JavaScript objects
    }


    const activity = document.querySelector(".activity");
    const ipElement = document.querySelector(".ip");
    const weatherElement = document.querySelector(".weather");
    const usdTracker = document.querySelector(".usd");

    getData("https://www.boredapi.com/api/activity").then((data) => {
        activity.innerHTML = data.activity; // JSON data parsed by `data.json()` call
    });

    fetch("https://api.ipify.org?format=json", {method: "GET"}).then((response => {
        response.json().then(res => {
            ipElement.innerHTML = res.ip
        })
    }))

    fetch("http://api.openweathermap.org/data/2.5/find?q=Vitebsk,BY&type=like&APPID=b2d83ded5a98b51b56b82501dd2d65e3", {method: "GET"}).then((response => {
        response.json().then(res => {
            let cityName = res.list[0].name
            let osadkyType = res.list[0].weather[0].main
            let temperature = Math.round(res.list[0].main.temp-273.15)
            weatherElement.innerHTML = `Город - ${cityName}, Тип осадков - ${osadkyType}, Температура - ${temperature}`;
        })
    }))

    // fetch("https://v6.exchangerate-api.com/v6/119eb77abd69185f40655eaa/latest/BYN", {method: "GET"}).then((response => {
    //     response.json().then(res => {
    //        let usd = res.conversion_rates.USD
    //        let rub = res.conversion_rates.RUB
    //        let eur = res.conversion_rates.EUR
    //         usdTracker.innerHTML = `1 BYN = Доллар - ${usd}; Российский рубль - ${rub}; Евро - ${eur}`;
    //     })
    // }))



});



