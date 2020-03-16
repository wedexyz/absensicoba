



navigator.geolocation.getCurrentPosition(function(location) {

	var tileLayer = new L.TileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}');


	var map = new L.Map('map', {
	'center': [location.coords.latitude, location.coords.longitude],
	'zoom': 15,
	//'draggable': true,
	'layers': [tileLayer]
	});

	document.getElementById('addr').value =( location.coords.latitude+" "+location.coords.longitude);
	/*
//	document.getElementById('lokasi').value=a;
	var db = firebase.database();
	var ref = db.ref("lokasi/");
	var lokasi = ref.child('tempat');  
	lokasi.set(location.coords.latitude+" "+location.coords.longitude);
*/
	L.marker([location.coords.latitude, location.coords.longitude]).addTo(map)
	.bindPopup('<button type="button" class="button" onclick="addr_search(),webcamMgr.startCamera(),playVid(),openNav(),ambilDataTerakhir()">Camera Aktif</button>')
	



});
function chooseAddr(lat1, lng1, lat2, lng2, osm_type) {
	var loc1 = new L.LatLng(lat1, lng1);
	var loc2 = new L.LatLng(lat2, lng2);
	var bounds = new L.LatLngBounds(loc1, loc2);

	if (feature) {
		map.removeLayer(feature);
	}
	if (osm_type == "node") {
		feature = L.circle( loc1, 25, {color: 'green', fill: false}).addTo(map);
		map.fitBounds(bounds);
		map.setZoom(18);
	} else {
		var loc3 = new L.LatLng(lat1, lng2);
		var loc4 = new L.LatLng(lat2, lng1);

		feature = L.polyline( [loc1, loc4, loc2, loc3, loc1], {color: 'red'}).addTo(map);
		map.fitBounds(bounds);
	}
}

function addr_search() {
    var inp = document.getElementById("addr");

    $.getJSON('https://nominatim.openstreetmap.org/search?format=json&limit=5&q=' + inp.value, function(data) {
        var items = [];

        $.each(data, function(key, val) {
            bb = val.boundingbox;
			items.push(  bb[1] + ", " + bb[3]  + ", \"" + val.osm_type  + val.display_name );

		var a = ( val.display_name);
	

        });

		$('#results').empty();
        if (items.length != 0) {
            $('<p>', { html: "Search results:" }).appendTo('#results');
            $('<ul/>', {
                'class': 'my-new-list',
                html: items.join('')
			}).appendTo('#results');
			
        } else {
            $('<p>', { html: "No results found" }).appendTo('#results');
        }
    });
}


