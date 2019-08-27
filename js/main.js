// location search input and update information function with data obtained from APIs
const handleSearch = e => {
  const enterPressed = e.type === 'keypress' && e.which === 13;
  const clicked = e.type === 'click';
  const param = $('#search-txt').val();
  if (enterPressed || clicked) {

    getGeo(param, (lat, lng) => {
      getWeather(lat, lng, (x) => {
        updateWeather(x);
      });
      getAir(lat, lng, (y) => {
        updateAirQuality(y);
      });
    });

  }
};

// search running on key press or mouse click
$(document).on('keypress', handleSearch);
$('#search-btn').on('click', handleSearch);

// Geocoding API request
const getGeo = (city, cb) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyB_NuitwhpKPA8rVhGHmeCLvpKI5RkclGg`;
  $.getJSON(url, data => {
    const res = data.results;
    if (res.length === 0) {
      console.log('No data');
    } else if (res.length > 1) {
      console.log('More than one results');
    } else {
      const {lat, lng} = res[0].geometry.location;
      console.log({lat,lng});
      cb(lat, lng);
    }
  });
};

// darksky API request
const getWeather = (latitude, longitude, cb) => {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const url = `https://api.darksky.net/forecast/2939016fca374b82104bc62dd6797cba/${latitude}, ${longitude}?units=si`;
  $.getJSON(proxy + url, response => {
    console.log(response);
    cb(response);
  });
}

// Airvisual API request
const getAir = (latitude, longitude, cb) => {
  const url = `https://api.airvisual.com/v2/nearest_city?lat=${latitude}&lon=${longitude}&key=fjzgeB3ZH3puCAicB`;
  $.getJSON(url, response => {
    console.log(response);
    cb(response);
  });
};

// function injecting data to the weather section
const updateWeather = (weatherData) => {
    $('#timezone').html("Timezone: " + weatherData.timezone);
    $('#temp').html("Temperature: " + (weatherData.currently.temperature).toFixed(1) + " &#xb0;C");
    $('#humidity').html("Humidity: " + Math.floor(weatherData.currently.humidity*100) + "%");
    $('#summary').html(weatherData.hourly.summary);
    $('#weather-cond').html(weatherData.daily.summary);
    $('#wind-speed').html("Wind speed: " + Math.floor(weatherData.currently.windSpeed*3.6) + " km/h");
    $('#pressure').html("Pressure: " + Math.floor(weatherData.currently.pressure) + " hPa");
};

// function injecting data to the air quality section
const updateAirQuality = (airQualityData) => {
    $('#airquality').html(airQualityData.data.current.pollution.aqius);
};