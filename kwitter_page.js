//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyAQha5LRI5wJSj7E90Nnf3stHDXxHTDEu8",
      authDomain: "kwitter2-20475.firebaseapp.com",
      databaseURL: "https://kwitter2-20475-default-rtdb.firebaseio.com",
      projectId: "kwitter2-20475",
      storageBucket: "kwitter2-20475.appspot.com",
      messagingSenderId: "538993770030",
      appId: "1:538993770030:web:f5c5499b74a5d4d399e9bf"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("name");
    room_name=localStorage.getItem("room_name");
    function logout(){
      localStorage.removeItem("name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
    }
    function send(){
      msg= document.getElementById("send").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("send").value ="";


    }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
