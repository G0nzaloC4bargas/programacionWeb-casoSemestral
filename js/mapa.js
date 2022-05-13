//SCRIPT PARA AÑADIR MAPA--INCOMPLETO

function iniciarMap(){
    var coord = {lat: -33.5983559 ,lng: -70.5785865};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}