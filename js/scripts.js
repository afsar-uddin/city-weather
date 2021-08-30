// target input field and search button
const inputField = document.getElementById('input-field');
const submitBtn = document.getElementById('submit-btn');

// creating addeventlistener with submitBtn and fetch url
submitBtn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputField.value + '&units=metric&appid=0dee3ab84aa51bd38072f9a8c661ff58')
        .then(res => res.json())
        .then(data => showWeather(data))
        .catch(err => console.log('wrong city name!'))

    inputField.value = '';
});

// show search data in display
const showWeather = weather => {
    const displayWeather = document.getElementById('display-weather');

    displayWeather.innerHTML = `
        <div class="weather">
        <img src="icons/${weather.weather[0].icon}.png" />    
        <h3>${weather.name} (${weather.sys.country})</h3>
            <p><span class="cel">${weather.main.temp}</span> &#xb0;</span>C</p>
            <small>${weather.weather[0].description}</small>
        </div>
    `;
    // console.log(weather)
}

const loaded = () => {
    document.getElementById('loaded').style.display = 'none';
}