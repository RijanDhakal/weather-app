
async function weather(city_name) {
    const API_Key = "1bd1404eaabf8731d7c6b7bcea736636"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${API_Key}&units=metric`
    let data = await fetch(url)
    if (data.ok) {
        let info = await data.json();
        temp.innerText = info.main.temp;
        stats.innerText = info.weather[0].main;
        pressure.innerText = info.main.pressure;
        country.innerText = info.sys.country;
        let status = info.weather[0].main;
        // console.log(info.main.temp)
        // console.log(info.main.pressure)
        // console.log(info.weather[0].main)
        // console.log(info.sys.country)
        function updater(status) {
            let pic = document.body.querySelector(".weather-pic");
            console.log(pic.src)
            if(status === "Clear"){
                pic.src = "http://127.0.0.1:3000/js/clear.png"
            }
        }
        updater(status)
    }
    else {
        alert("This place is not in Our server !");
    }
}


let temp = document.body.querySelector(".temp");
let stats = document.body.querySelector(".status");
let pressure = document.body.querySelector(".pressure");
let country = document.body.querySelector(".country");

let btn = document.body.querySelector(".go");
btn.addEventListener(("click"), () => {
    let city_name = document.body.querySelector(".city-name").value.trim();
    weather(city_name);
})


