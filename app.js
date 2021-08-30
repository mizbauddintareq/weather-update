const spinerDive = document.getElementById('spiner')

const getCityName = () => {
    const searchBox = document.getElementById('search-box');
    const searchBoxText = searchBox.value;
    searchBox.value = '';
    
    
    const errorText =document.getElementById('error')
    if (searchBoxText == ''){       
        const h1 = document.createElement('h1');
        errorText.textContent = ''
        h1.innerHTML =`<h1 class="text-white fw-bold text-center">Please Enter A City Name</h1>`;
        errorText.appendChild(h1);

    }

    else{
        spinerDive.classList.remove('d-none')
        errorText.textContent=''
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchBoxText}&APPID=3c1cdc2815c1ddd2635c7b17b9877f7d`;
        getApiWeather(url)

    
    }

}

const getApiWeather=(getApiLink)=>{
    fetch(getApiLink)
    .then(res => res.json())
    .then(data => displayWeather(data))
}
getApiWeather(`https://api.openweathermap.org/data/2.5/weather?q=Dhaka&APPID=3c1cdc2815c1ddd2635c7b17b9877f7d`)


const displayWeather = weathers => {
    const searchContainer = document.getElementById('weather-container');
    searchContainer.textContent = '';
    const div = document.createElement('div')
    div.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${weathers.weather[0].icon}.png" alt="">
    <h1>${weathers.name}</h1>
    <h3><span>${Math.round((weathers.main.temp-273.15))}</span>&#8451</h3>
    <h1 class="lead">${weathers.weather[0].description}</h1>
    `;
    spinerDive.classList.add('d-none')
    searchContainer.appendChild(div)
}





















