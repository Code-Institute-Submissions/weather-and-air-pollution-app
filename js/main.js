

const handleSearch = e => {
  const enterPressed = e.type === 'keypress' && e.which === 13;
  const clicked = e.type === 'click';
  const param = $('#search-txt').val();
  if (enterPressed || clicked) {

    getGeo(param, getWeather)
  };
}

$(document).on('keypress', handleSearch);
$('#search-btn').on('click', handleSearch);


const getGeo = (city, cb) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyA9SZckhP0OZcTgK_8d-bEXjugGkACUBkw`;
  $.getJSON(url, data => {
    const res = data.results
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
}

const getWeather = (latitude, longitude) => {
  const proxy = 'http://cors-anywhere.herokuapp.com/'
  const url = `https://api.darksky.net/forecast/2939016fca374b82104bc62dd6797cba/${latitude}, ${longitude}`;
  $.getJSON(proxy + url, response => {
    console.log(response);
    $('#temp').html(response.currently.apparentTemperature)
  })
}

const getAir = () => {

}
