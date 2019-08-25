# Weather & Air Quality Application
Second Milestone Project - Interactive Frond Development - Code Institute
This is my single page application using APIs, built as my second milestone project. The main goal for it is to provide the information on current waether conditions and air quality in the specified city. 
## UX
My first goal in the design of the application was to provide users with the detailed information served in a nice and clean way. As the information itself is not very extensive, I wanted to present it in a form similar to desktop weather stations, that remind tablets.
User stories:
* As a user I want to get the information on weather in a specified city
* As a user I want to obtain the information regarding air quality in a specified city
## Features
The application is using three APIs. **Geocoding API** from Google, obtains the coordinates of a city that was input in the search field, which are subsequently passed to [darksky API](https://darksky.net), which provides information about weather conditions and [airvisual API](https://www.airvisual.com/air-pollution-data-api), which provides information on air quality.
The application is divided into three sections:
* Search field
* Weather data information section, which provides information on the weather conditions,
* Air quality information section, which provides information regarding air quality,
The wireframes have been created using Balsamiq, to give an idea of how the application would look like on a different devices.
### Existing features
After typing in a city name and pressing 'Enter' or clicking the lens icon in the input field, a request is being sent to Google Geocoding API, which returns latitude and longitude information, which are then passed to **darksky** and **airvisual** APIs. The data that application receives from APIs is injected into two panels. The left panel (top one for mobile devices) provides user with information regarding weather, such as: current temperature, humidity, wind speed, pressure, brief description of a daily weather and seven days prediction, as well as timezone of a location. The right panel (bottom one for mobile devices) provides the air pollution index with legend, describing the level of pollution.
### Features left to implement
- [ ] adding weather icons (they are not part of darksky.net API)
## Testing
The website was tested on different devices, such as:
* desktop PC,
* laptop,
* tablet (Samsung Galaxy Tab A6)
* smartphones (OnePlus 7 Pro, OnePlus 5T)
and accross different browsert:
* Google Chrome mobile version
* Google Chrome
* Mozilla Firefox
* Microsoft Edge
The website works correctly on different screens and resolutions, as well as different orientations.
Whend writing JavaScript code I came across a Cross-Origin Resource Sharing error on darksky API, which was resolved by using [CORS proxy](https://cors-anywhere.herokuapp.com/).
## Technologies used
Application was built using following technologies:
* HTML - used for the structural elements of the site,
* CSS - used to style the HTML elements,
* [jQuery](https://jquery.com/) - used for sending requests to APIs and injecting received information into HTML,
* [Geocoding API from Google](https://developers.google.com/maps/documentation/geocoding/start) - used to retrieve coordinates of a location
* [darksky API](https://darksky.net) - used to retrieve weather details of a location
* [airvisual API](https://www.airvisual.com/air-pollution-data-api) - used to retrieve an information regarding air quality of a location.
## Deployment
The application was coded using Visual Studio Code and was tested using the Live Server extenstion of VS Code.
This site is hosted on Github Pages, deployed from the master branch. There are no differences between the development and deployed version. The website is available under following link: [Weather and Air Pollution Application](https://r-andy79.github.io/weather-and-air-pollution-app/).
## Credits

### Content

### Acknowledgements
* The idea for the website, to combine weather and air pollution data was mine. I was inspired by [Dev Ed Tutorial](https://www.youtube.com/watch?v=wPElVpR1rwA) on YouTube, but I wanted to combine two functions in one application.