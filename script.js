const weather = {
    apiKey: "dd2cb913554aa41dacdf53adcf320bd3",
    unit: ["imperial", "metric"],
    fetchWeather: function() {
        const city = document.getElementById('searchBar').value;
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=${this.unit}`
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { speed } = data.wind;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
    }, 
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
}
    document.querySelector(".search > button").addEventListener("click", function () {
    weather.search();
    });

    document.querySelector(".search-bar").addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
          weather.search();
        }
      });

    weather.fetchWeather("Houston, TX");