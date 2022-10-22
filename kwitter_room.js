const firebaseConfig = {
  apiKey: "AIzaSyAQha5LRI5wJSj7E90Nnf3stHDXxHTDEu8",
  authDomain: "kwitter2-20475.firebaseapp.com",
  databaseURL: "https://kwitter2-20475-default-rtdb.firebaseio.com",
  projectId: "kwitter2-20475",
  storageBucket: "kwitter2-20475.appspot.com",
  messagingSenderId: "538993770030",
  appId: "1:538993770030:web:f5c5499b74a5d4d399e9bf"
};
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("name");
    document.getElementById("user").innerHTML= "Welcome " + user_name +"!";
//ADD YOUR FIREBASE LINKS HERE

function add_room() {
      room_name = document.getElementById("new_room").value;
    
      firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
      });
    
      localStorage.setItem("room_name", room_name);
    
      window.location = "kwitter_page.html";
    }
    
    // Initialize Firebase
   
    
    function getData() 
    {
      firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("trooms").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("trooms").innerHTML += row;
        });
      });
    
    }
    
    getData();
    
    function redirectToRoomName(name) 
    {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
    }
    
    function logout() 
    {
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
    }