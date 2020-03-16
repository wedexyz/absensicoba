var firebaseConfig = {

    databaseURL:" https://user-49128.firebaseio.com/",
    
    };
    firebase.initializeApp(firebaseConfig);
    var dbRef = firebase.database();

 var lokasi= document.getElementById('lokasi');
 var waktu= document.getElementById('idwaktu');
    dbRef.ref("/lokasi").child('tempat').on('value', snap => lokasi.value= snap.val());
    dbRef.ref("/waktu").child('waktuid').on('value', snap => waktu.value= snap.val());

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
       var cell4 = row.insertCell(3);

       cell1.innerHTML = newstatus.id; 
       cell2.innerHTML = newstatus.nama;
       cell3.innerHTML = newstatus.waktu;
       cell4.innerHTML = newstatus.koordinat;
       });
     }


     
             //-----------------sheet database

            

            
           
        