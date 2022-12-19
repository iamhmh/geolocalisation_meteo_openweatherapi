// bouton de recherche de la localisation
$('#boutonMeteo').click(function(){
    navigator.geolocation.getCurrentPosition(reussi, echec);
});
  
function reussi(position) {
    let crd = position.coords;
  // GET request using jquery at openweathermap
    $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&lang=fr&APPID=fd73b9be61ef9ca47df317498c41383c`, function(data){
        console.log(data);
        let temperature = data.main.temp - 273.15;
        $('#temperaturePosition').html(`<h2 id="meteo">La temperature à ${data.name} est de ${temperature}°C</h2>`);
        $('#long').html(`<h3 id="long">Longitude : ${crd.longitude}°</h3>`);
        $('#lat').html(`<h3 id="lat">Latitude : ${crd.latitude}°</h3>`);
        $('#iconeMeteo').html(`<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png' style='width= 120px; height= 120px;' alt='${data.weather[0].description}'>`);
        $('#temps').html(`${data.weather[0].description}`);
    });
  }
  
  // if geolocation comes back 'unsuccessful'
function echec(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    $('#temperaturePosition').html(`ERROR(${err.code}): ${err.message}`);
}