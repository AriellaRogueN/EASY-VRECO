function initMap() {
    var chili = {
        lat: -33.418878299999996, lng: -70.64229580000001
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: chili
    });
    var marker = new google.maps.Marker({
        position: chili,
        map: map
    });


function buscar() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(funcionExito, funcionError); //getCurrentPosition permite al usuario obtener su ubicación actual, uncionExito se ejecuta solo cuando el usuario comparte su ubicación, mientras que funcionError se ejecuta cuando se produce un error en la geolocalización
    }
}

document.getElementById("encuentrame").addEventListener("click", buscar);

var funcionExito = function (posicion) { //var funcionExito, con el que obtendremos nuestra latitud o longitud y además crearemos un marcador de nuestra ubicación.
    latitud = posicion.coords.latitude;
    longitud = posicion.coords.longitude;

    var miUbicacion = new google.maps.Marker({
        position: {lat: latitud,lng: longitud},
        map: map
    });

    map.setZoom(18);
    map.setCenter({
        lat: latitud,
        lng: longitud
    });
}

var funcionError = function (error) { //funcionError con un mensaje para el usuario, en caso de que nuestra geolocalización falle.
    alert("tenemos un problema con encontrar tu ubicación");
}

}





    