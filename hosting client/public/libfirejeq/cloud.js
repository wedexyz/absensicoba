var firebaseConfig = {

    databaseURL:" https://user-49128.firebaseio.com/",
    
    };
    firebase.initializeApp(firebaseConfig);
    var dbRef = firebase.database();
    var face = document.getElementById('face');
    dbRef.ref("/server").child('face').on('value', snap => face.value= snap.val());


    function tampilData()
	{

		var dbRef = firebase.database();
		var statusAlat = dbRef.ref("database");
		var table = document.getElementById("tabel").getElementsByTagName('tbody')[0];
		$("#tabel").find("tr:gt(0)").remove();

		statusAlat.on("child_added", function(data, prevChildKey) {
		var newstatus = data.val();
		var row = table.insertRow(table.rows.length);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
      
		cell1.innerHTML = newstatus.nama; 
        cell2.innerHTML = newstatus.waktu;
        cell3.innerHTML = newstatus.koordinat;
		});
    }
    
    
        
           





             function ambilDataTerakhir() {

                $('#waktu').val("");
                $('#lokasi').val("");
                $('#face').val("");
            
            
                var dbRef_ambilDataTerakhir = firebase.database();
                var cariAkhir = dbRef_ambilDataTerakhir.ref("database/");
                cariAkhir.limitToLast(1).on('child_added', function (dataAkhir) {
                    var snap = dataAkhir.val();
                    var id_record_terakhir = snap.id + 1;
                    document.getElementById("id").value = id_record_terakhir;
                });
    
            }




             function addData_Proses()
                 {
              var id_add_proses = $('#id').val();
               var jam = $('#waktu').val();
               var lokasi= $('#addr').val();
               var wajah= $('#face').val();
                   var dbRef_add_proses = firebase.database();
                   var database = dbRef_add_proses.ref("database/" + id_add_proses);
                     database.set({
                     id : parseInt(id_add_proses),
                     waktu :jam,
                      koordinat : lokasi,
                      nama : wajah
                       });   
                       
                      
    
                  
                   }
                