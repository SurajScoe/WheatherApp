const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dbbea710a5msh144110d08ad3c47p164e44jsne183a1ce997d',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWheather = (city) =>{
    cityName.innerHTML = city
    //Here we will take city name dynamically
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then(response => {
        
        console.log(response)
    
        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_degrees.innerHTML = response.wind_degrees
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset
        
    })
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
    e.preventDefault() //it prevents from reloading
    getWheather(city.value)
})

getWheather("Delhi")