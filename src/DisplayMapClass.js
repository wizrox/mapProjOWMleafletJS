///* Courtesy:
///  open weather map: https://openweathermap.org/api
///----
/// leaflet example github:  buche /leaflet-openweathermap 
///                         url: https://github.com/buche/leaflet-openweathermap/tree/bc9cb1de638d10a27628092835c7f738bf096681 
/// Tutorial for using maps with react: https://developer.here.com/tutorials/react/
/// Tutorial for using api with react: https://rapidapi.com/blog/how-to-use-an-api-with-react/
/// Tutorial for handling fetch() call with react: https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples
///____
//// Disclaimer:
////            I don't own any rights for this code , it's just an example for using "openweathermaps" with react.All the coding are
////            snippets from the above mentioned git/tutorials/urls. any damage or loss by using this code will not cover under any
////            liability by the developer. please analyze the risk associated with this code before using it in your projects.

//  cosmetic files 
import logo from './logo.svg';
import './App.css';

//  src/DisplayMapClass.js

import * as React from 'react' ;

export class DisplayMapClass extends React.Component {

    mapRef = React.createRef();
    
    state = {
        // The map instance to use during Cleanup
        map: null
    };
    
    async componentDidMount() {
        
        
        var owm_API_key = 'b4f215ca39fba72abf5e8b413859f1dd'; 
                        //'^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^' please user your own api key by registring free at "https://openweathermap.org/api"
        
        const L = window.L;
        
        var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 18, 
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors</a> <a href="https://www.hotosm.org/" target="_blank">Tiles courtesy of Humanitarian OpenStreetMap Team</a>' });
        
        // weather options/layers to be overlayed on the map element.
        var temp = L.OWM.temperature( { showLegend: true, opacity: 0.5, appId: owm_API_key } );
        var clouds = L.OWM.clouds({showLegend: true, opacity: 0.5, appId: owm_API_key});
        var cloudscls = L.OWM.cloudsClassic({showLegend: true, opacity: 0.5,appId: owm_API_key});
        var rain = L.OWM.rain({showLegend: true, opacity: 0.5,appId: owm_API_key});
        var raincls = L.OWM.rainClassic({showLegend: true, opacity: 0.5,appId: owm_API_key}); 
        var pressure = L.OWM.pressure({opacity: 0.4, appId: owm_API_key});
        var pressurecntr = L.OWM.pressureContour({opacity: 0.5, appId: owm_API_key});
        var wind = L.OWM.wind({showLegend: true, opacity: 0.5,appId: owm_API_key});
        var snow = L.OWM.snow({opacity: 0.5, appId: owm_API_key});
//        var city = L.OWM.current( { interval: 15 , lang: 'en' } );//
        var city = L.OWM.current({
                                    intervall: 15, 
                                    imageLoadingUrl: logo, 
                                    lang: 'en', 
                                    minZoom: 7, 
                                    progressControl: 'true',
                                    caching: 'true',                            
			        appId: owm_API_key});
        
// map object with cordinates centre over Australian city
            var lat = -37.80;
	        var lon = 144.98;
	        var useGeolocation = true;
       const map = await L.map ( this.mapRef.current,
                                 
                                { center: new L.LatLng(lat,lon), 
                                  zoom: 8,
                                  layers: osm
                                } 
                             );
       var baseMaps = { "OSM Standard":  osm };
       var overlayMaps = { "Temperature": temp ,
                           "Clouds" : clouds,"CloudsCls" : cloudscls,
                           "Rain" : rain, "RainCls" : raincls,
                           "Pressure" : pressure, "PressureCntr" : pressurecntr,
                           "Wind": wind, 
                           "Snow" : snow,
                           "Cities (zoom-in required)": city };

       var layerControl = L.control.layers(baseMaps,overlayMaps, {collapsed: false} ).addTo(map);
        /*map.addControl(new L.Control.Permalink({layers: layerControl, useAnchor: false, position: 'bottomright'}));*/
        
///------------------------
//courtesy:
//  git:https://github.com/buche/leaflet-openweathermap/blob/bc9cb1de638d10a27628092835c7f738bf096681/example/files/map.js
// lines included: 83 - 93 , 271, 353 - 355
////////
/**
 * Callback for successful geolocation.
 * @var position Geolocated position
 */
        function foundLocation(position) {
	        if (typeof map != "undefined") {
		        var lat = position.coords.latitude;
		        var lon = position.coords.longitude;
		        map.setView(new L.LatLng(lat, lon), 10);
	        }
        }


	        if (useGeolocation && typeof navigator.geolocation != "undefined") {
		        navigator.geolocation.getCurrentPosition(foundLocation);
	        }
///--------
        
        this.setState({ map });
     }
     
     componentWillUnmount(){
         
         //cleanup after the map to avoid memory leaks when this component exits the page
        if (  (this.mapRef.current !== undefined) && (this.mapRef.current !== null) )
            { 
                
                this.state.map.remove();
                
                this.state.map.off();
                
                this.mapRef = null;                
                console.log('----call of disposing function for map null---');
                
                
            }
         //----------
         if (!( this.state.map == null ) )
            {
                 this.state.map = null;
                  console.log('----call of disposing function for map---');
            }
      }   
      
      
      render() {
         
                return( 
                    
                    //html element that will render the map
                    <div id='map' ref = {this.mapRef} style={ 
                                                              { height: "100%",
                                                                width: "100%",
                                                                position: "relative" 
                                                                } 
                                                             }
                                                           >
                    </div>
                    
                );

      }
        
} //~~~end of class
