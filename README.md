# Second Milestone Project - Data Centric Design: API - Code Institute
This is my API single page application built as my second milestone project. The main goal for it is to provide the information on current waether conditions and air quality in the specified city. 
## UX
My first goal in the design of the application was to provide users with the detailed information served in a nice and clean way. 
User stories:
* As a user I want to get the information on weather in a specified city
* As a user I want to obtain the information regarding air quality in a specified city
## Features
The application is using three APIs. **Geocoding API** from Google, obtains the coordinates of a city that was input in the search field, which are subsequently passed to [darksky API](https://darksky.net), which provides information about weather conditions and [airvisual API](https://www.airvisual.com/air-pollution-data-api), which provides information on air quality.
The application is divided into three sections:
* Search field
* Weather data information section, which provides information on the weather conditions,
* Air quality information section, which provides information regarding air quality,
### Existing features
After typing in a city name, a request is being sent to Geocoding API from Google, which returns latitude and longitude, which are then passed to **darksky** and **airvisual** APIs. The data that application receives is split in two panels. The left panel (top one for mobile devices) provides user with information regarding weather, such as: current temperature, humidity, wind speed, pressure, brief description of a daily weather and seven days prediction, as well as timezone of a location. The right panel (bottom one for mobile devices) provides the air pollution index with legend.
### Features left to implement
- [ ] adding weather icons (they are not part of darksky.net API)
## Testing
## Technologies used
Application was built using following technologies:
* Balsamiq
* HTML,
* CSS,
* JavaScript
## Deployment
Application was deployed to Github Pages.
## Credits
### Media
### Acknowledgements


