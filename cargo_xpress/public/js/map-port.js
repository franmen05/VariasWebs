// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', initPort);


function initPort() {
    'use strict'; // use strict mode

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var myLatlng2 = new google.maps.LatLng(18.4508312,-69.680864);


    var mapOptions2 = {
        // How zoomed in you want the map to start at (always required)
        zoom: 8,
        disableDefaultUI: false,
        scrollwheel: true,

        // The latitude and longitude to center the map (always required)

        center: myLatlng2, // New York

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [
            {
                "stylers": [ 
                    {
                        "hue": "#ff1a00"
                    },
                    {
                        "invert_lightness": true
                    },
                    {
                        "saturation": -100
                    },
                    {
                        "lightness": 33
                    },
                    {
                        "gamma": 0.5
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#2D333C"
                    }
                ]
            }
        ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement2 = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map2 = new google.maps.Map(mapElement2, mapOptions2);

    var sd = new google.maps.LatLng(18.472938,-69.8797141);
    var rioHaina = new google.maps.LatLng(18.4505431,-70.180174);
    var causedo = new google.maps.LatLng(18.4395188,-69.6110464);//Boca Chica, Zona Este, Provincia Santo Domingo
    var pp = new google.maps.LatLng(19.782653,-70.670174);
    var sanPedro = new google.maps.LatLng(18.4505431,-69.180174);
    var caboRojo = new google.maps.LatLng(17.9205431,-71.680174);
    var monteCristi = new google.maps.LatLng(19.9105431,-71.560174);
    var samana = new google.maps.LatLng(19.2005431,-69.330174);
    
    new google.maps.Marker({
        position: sd, 
        map: map2,
        icon: 'img/map-marker.png',
        title: 'Santo Domingo'
    });
    new google.maps.Marker({
        position: rioHaina,
        map: map2,
        icon: 'img/map-marker.png',
        title: 'Rio Jaina'
    });
    new google.maps.Marker({
        position: sanPedro,
        map: map2,
        icon: 'img/map-marker.png',
        title: 'San Pedro'
    });
    new google.maps.Marker({
        position: causedo,
        map: map2,
        icon: 'img/map-marker.png',
        title: 'causedo'
    });
    
    
    new google.maps.Marker({
        position: pp,
        map: map2,
        icon: 'img/map-marker.png',
        title: 'Puerto Plata'
    });
    new google.maps.Marker({
        position: caboRojo,
        map: map2,
        icon: 'img/map-marker.png',
        title: 'Puerto de Pedernales(Cabo Rojo)'
    });
    new google.maps.Marker({
        position: monteCristi,
        map: map2,
        icon: 'img/map-marker.png',
        title: 'Monte Cristi'
    });

    new google.maps.Marker({
        position: samana,
        map: map2,
        icon: 'img/map-marker.png',
        title: 'samana'
    });
}
