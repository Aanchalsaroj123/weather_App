
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let month = months[d.getMonth()];
document.getElementById("month").innerHTML = month;
document.getElementById("date").innerHTML = d.getDate();
document.getElementById("hour").innerHTML = d.getHours();
document.getElementById("min").innerHTML = d.getMinutes();


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '1cfea5371emshe36b8d6a8eb19e4p166e31jsnab5da272b88f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


const getWeather=(city)=>{
	Cityname.innerHTML=city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		console.log(response)

		
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		wind_speed.innerHTML = response.wind_speed
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		sunrise.innerHTML = response.sunrise
		sunset.innerHTML = response.sunset
		humidity.innerHTML = response.humidity
		cloud_pct.innerHTML = response.cloud_pct
		// wind_degrees.innerHTML = response.wind_degree
		
	})
	.catch(err => console.error(err));
}

submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Delhi")

