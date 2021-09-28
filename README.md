# Sample project for using Openweathermaps and leaflet in a React Application.
The objective of this project is to create a React Application that can display and interactive map to show brief weather forecast. The following tools are needed to be downloaded and installed before creating this application.
- React (npm tools installed)
- Openweathermap API key
- leaflet.js packages (to bundle with the app)

## Steps to be followed to setup the environment for creating Application (Ubuntu mate)
- Installing npm tools for creating a React App using commandlines/terminal as follows:
 - $ sudo apt install npm
- now create an empty/default React Application using npx command as follows:
 - $ npx create-react-app my-app
 - now you need to get an API key to use openweathermap.org (create free account) from openweathermap.org
 - One more thing required for this project is "leaflet.js" packages (the one included in this project is downloaded from git tutorial mentioned in the link)
### Application features ![5](https://user-images.githubusercontent.com/54668143/134902236-41059b89-c20a-492f-a0b3-3960b3aad520.png)

- This is very simple web application that overlays weather layers on a map based on geolocation initialized with it. Using openweathermap API to create overlayers that will dispaly with the map. this all uses leaflet.js functions to create and display the map in the browser. the following are some of the screenshots from the browser.

![map](https://user-images.githubusercontent.com/54668143/134902160-c7e0f755-09fb-464c-b890-ab79636ac00b.png)
![cloud](https://user-images.githubusercontent.com/54668143/134902223-c96ff848-2572-453d-af5d-1885ffa84c1a.png)
![temperature](https://user-images.githubusercontent.com/54668143/134902229-16a6bd8b-38d2-4cb9-b33a-a568567fd658.png)
![snow](https://user-images.githubusercontent.com/54668143/134902241-9088998f-b219-4fc7-a7b6-e18bc083f508.png)


## Git/Resources/Knowledge-base/Tutorials:
- ### openweathermap  https://openweathermap.org/api
- ### React Development https://create-react-app.dev/docs/getting-started/
- https://developer.here.com/tutorials/react/
- https://rapidapi.com/blog/how-to-use-an-api-with-react/
- https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
- ### Git https://github.com/buche/leaflet-openweathermap
- https://github.com/google/maps-for-work-samples
- https://github.com/jdretz/rapidapi-react-api-call

# Disclaimer & Courtesy:
This code/project is refrenced from above mentioned links, it's just an example for using "openweathermaps" with react. Most of the coding are
snippets from the links and resources mentioned in git/tutorials/urls section below. Please analyze the risk associated with this code before using it in your projects.
