// API key a6a97f26af6ce6b0ef845f1ee1605b04
//api.openweathermap.org/data/2.5/forecast/city?id=524901&APPID=a6a97f26af6ce6b0ef845f1ee1605b04

$(window).ready(function() {
   $('select').material_select();
   $(".button-collapse").sideNav({
     menuWidth: 150
   }
  );
  // Check to see if the browser supports the GeoLocation API.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var lon = position.coords.longitude;
      console.log('lat ' + lat + ' lon ' + lon);
      $.get( "http://api.openweathermap.org/data/2.5/weather?lat="+ lat + "&lon=" + lon + "&APPID=a6a97f26af6ce6b0ef845f1ee1605b04&units=metric&&lang=fr ",function( data ) {
        $( "#CityName" ).html( data.name );
        // $('#SelectCity').val(data.id);
        console.log(data.name);
        $( "#CityTemp" ).html( data.main.temp );
        $( "#CityWind" ).html( data.wind.speed );
        $( "#CityCond" ).html( data.weather[0].description );
      });
});
  } else {
    // Print out a message to the user.
    console.log('Your browser does not support GeoLocation');
  }
  var Obj = {};
  // $.get( "http://api.openweathermap.org/data/2.5/weather?lat="+ + "&lon=" + lon + "&APPID=a6a97f26af6ce6b0ef845f1ee1605b04&units=metric&&lang=fr ",function( data ) {
  //   $( "#CityName" ).html( data.name );
  //   $( "#CityTemp" ).html( data.main.temp );
  //   $( "#CityWind" ).html( data.wind.speed );
  //   $( "#CityCond" ).html( data.weather[0].description );
// });

  $('#SelectCity').on('change', function() {
    $.get( "http://api.openweathermap.org/data/2.5/weather?id="+ $('#SelectCity').val() + "&APPID=a6a97f26af6ce6b0ef845f1ee1605b04&units=metric&&lang=fr ",function( data ) {
      $( "#CityName" ).html( data.name );
      $( "#CityTemp" ).html( data.main.temp );
      $( "#CityWind" ).html( data.wind.speed );
      $( "#CityCond" ).html( data.weather[0].description );
  });
})

})
