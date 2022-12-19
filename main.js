// bouton de recherche de la localisation
$('#boutonMeteo').click(function(){
    navigator.geolocation.getCurrentPosition(reussi, echec);
});

//fonction en cas de réussite, on récupère les données de l'API
function reussi(position) {
    let crd = position.coords;
    $.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&lang=fr&APPID={API key}`, function(data){
        console.log(data);
        let temperature = data.main.temp - 273.15;
        $('#temperaturePosition').html(`<h2 id="meteo">La temperature à ${data.name} est de ${temperature}°C</h2>`);
        $('#long').html(`<h3 id="long">Longitude : ${crd.longitude}°</h3>`);
        $('#lat').html(`<h3 id="lat">Latitude : ${crd.latitude}°</h3>`);
        $('#iconeMeteo').html(`<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png' style='width= 120px; height= 120px;' alt='${data.weather[0].description}'>`);
        $('#temps').html(`${data.weather[0].description}`);
    });
  }
//fonction en cas d'erreur  
function echec(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    $('#temperaturePosition').html(`ERROR(${err.code}): ${err.message}`);
}
