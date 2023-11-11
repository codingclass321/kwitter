
var firebaseConfig = {
      apiKey: "AIzaSyA38FdaECMKfFk61qNcykSUg0ocbSq8tAs",
      authDomain: "kwitter-19e22.firebaseapp.com",
      databaseURL: "https://kwitter-19e22-default-rtdb.firebaseio.com",
      projectId: "kwitter-19e22",
      storageBucket: "kwitter-19e22.appspot.com",
      messagingSenderId: "799662623660",
      appId: "1:799662623660:web:a4719b08a1649654b18809"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");

    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"

    function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
      purpose : " adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name -" + Room_names);
      row= "<div class='room_name' id="+ Room_names +"onclick = 'redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"
      document.getElementById("output").innerHTML += row;
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}