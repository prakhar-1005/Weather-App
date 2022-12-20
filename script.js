const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '84c576a16emshedb4b18127fefa6p1a66d2jsn22397a83927e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

//function to find the weather of cities


const findWeather=(city)=>{

	document.getElementById("cityName").innerHTML=city

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)   // city is called dynamically
	.then(response => response.json())
	.then((response) => {
		document.getElementById("cloud_pct").innerHTML =response.cloud_pct 
		document.getElementById("temp").innerHTML =response.temp
		document.getElementById("feels_like").innerHTML =response.feels_like 
		document.getElementById("humidity").innerHTML =response.humidity
		document.getElementById("min_temp").innerHTML =response.min_temp  
		document.getElementById("max_temp").innerHTML =response.max_temp
		document.getElementById("wind_speed").innerHTML =response.wind_speed  
		document.getElementById("wind_degrees").innerHTML =response.wind_degrees  
		document.getElementById("sunrise").innerHTML =response.sunrise 
		document.getElementById("sunset").innerHTML =response.sunset
		
		console.log(response)

	})
	.catch(err => console.error(err));
	
}

let city_required=document.getElementById("city-searched");
document.getElementById("search-button").addEventListener("click",(e)=>{
	e.preventDefault();      // restricts reloading of page again and again
	findWeather(city_required.value);
})

findWeather("Delhi");   // by default Delhi is selected







const collectWeatherData=(city,val2)=>{

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)   // city is called dynamically
	.then(response => response.json())
	.then((response) => {
		document.getElementById(`table-cloud-pct-${val2}`).innerHTML =response.cloud_pct 
		document.getElementById(`table-temp-${val2}`).innerHTML =response.temp
		document.getElementById(`table-feels-like-${val2}`).innerHTML =response.feels_like 
		document.getElementById(`table-humidity-${val2}`).innerHTML =response.humidity
		document.getElementById(`table-min-temp-${val2}`).innerHTML =response.min_temp  
		document.getElementById(`table-max-temp-${val2}`).innerHTML =response.max_temp
		document.getElementById(`table-wind-speed-${val2}`).innerHTML =response.wind_speed  
		document.getElementById(`table-wind-deg-${val2}`).innerHTML =response.wind_degrees  
		document.getElementById(`table-sunrise-${val2}`).innerHTML =response.sunrise 
		document.getElementById(`table-sunset-${val2}`).innerHTML =response.sunset
		console.log(response);

	})
	
	
}

collectWeatherData(document.getElementsByClassName("city-in-table")[0].innerHTML,0);
collectWeatherData(document.getElementsByClassName("city-in-table")[1].innerHTML,1);
collectWeatherData(document.getElementsByClassName("city-in-table")[2].innerHTML,2);
collectWeatherData(document.getElementsByClassName("city-in-table")[3].innerHTML,3);
collectWeatherData(document.getElementsByClassName("city-in-table")[4].innerHTML,4);
collectWeatherData(document.getElementsByClassName("city-in-table")[5].innerHTML,5);


