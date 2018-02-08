function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          mapTypeControl: false,
          center: {lat: -33.8688, lng: 151.2195},
          zoom: 13
        });

        function buscar(){
          if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(functionExito, functionerror);
          }
        }
        var latitud,longitud;
        var functionExito = function(posicion){
          latitud = posicion.coords.latitude;
          longitud = posicion.coords.longitude;
        }
        var miUbicacion = new google.maps.Marker({
          position: {lat:latitud, lng:longitud},
          map: map
        });
        var functionError = function(error){
          alert("tenemos un problema al encontrar tu ubicacion");
          document.getElementById("encuentrame").addEventListener("click")
        }
        var inputPartida = document.getElementById
      }

