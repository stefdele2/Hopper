var taxis = [               
    {
                "geo":"3.7216085170393,51.053990017924",
            
        "adres":"Gent Korenmarkt perron 2, 9000 Gent, België"
                },
   
  {
                "geo":"3.7305114083734,51.048087100376",
             
        "adres":"Gent Zuid, 9000 Gent, België"
                },
   {
                "geo":"3.7115750574136,51.036168474463",
            
        "adres":"Gent Sint-Pietersstation perron 19, 9000 Gent, België"
                },
      {
                "geo":"3.7400863685371,51.056357161705",
               
        "adres":"Gent Dampoort - Perron 15, 9000 Gent, België"
                },
    {
                "geo":"3.6921087940007,51.025415269708",
              
        "adres":"Flanders Expo, 9000 Gent, België"
                },
        {
                "geo":"3.7227812797699,51.050724685357",
               
        "adres":"Zijvleugel Links, 9000 Gent, België"
                },
        {
                "geo":"3.7223285027056,51.050722204274",
              
        "adres":"Zijvleugel Rechts, 9000 Gent, België"
                },
        {
                "geo":"3.7236881467039,51.050634512282",
              
        "adres":"Faculteit Politieke en Sociale Wetenschappen, 9000 Gent, België"
                }
                
];


var map;
$.getJSON("https://datatank.stad.gent/4/mobiliteit/taxilocaties.geojson", function (data) {
function initMap() {
  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(51.04219,3.70386)
  };

  // map maken
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  for(var i = 0; i < data.coordinates.length; i++) {
     var infowindow = new google.maps.InfoWindow({ 
                                                 content: taxis[i].adres
      });

      
    //pinnekes maken
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(data.coordinates[i][1],data.coordinates[i][0]),
      map: map
    });
    
      	marker.infowindow = infowindow;

	//finally call the explicit infowindow object
	marker.addListener('click', function() {
		return this.infowindow.open(map, this);
	})

	// Alternate way of adding infowindow listeners
	google.maps.event.addListener(marker, 'click', function() {
	 	this.infowindow.open(map, this); 
	});
      
      
      

        
  };
};
$(document).ready(function(){
  initMap();
});
        
 });

