
const handleSearch = e => {
  const enterPressed = e.type === 'keypress' && e.which === 13;
  const clicked = e.type === 'click';
  if (enterPressed || clicked) {
    getGeo($('#search-txt').val())
  };
}

$(document).on('keypress', handleSearch);
$('#search-btn').on('click', handleSearch);


const getGeo = city => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=AIzaSyA9SZckhP0OZcTgK_8d-bEXjugGkACUBkw`;
  $.getJSON(url, data => {
    const res = data.results
    if (res.length === 0) {
      console.log('No data');
    } else if (res.length > 1) {
      console.log('More than one results');
    } else {
      const {lat, lng} = res[0].geometry.location;
      console.log({lat});


    }
  });
}


const getAir = () => {

}

const getWeather = () => {

}
