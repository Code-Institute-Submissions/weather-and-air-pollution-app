$(document).on('keypress', e => {
  if(e.which == 13) {
    const cityName = $('#search-txt').val();
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${cityName}&key=AIzaSyA9SZckhP0OZcTgK_8d-bEXjugGkACUBkw`
    $.getJSON(url, data => {
      if (data.results.length === 0) {
        console.log('No data');
      } else {
        const {lat, lng} = data.results[0].geometry.location



      }

    });
  };


});
