var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
  apiKey: "AIzaSyCiUm6kkw9iiNLcsgzQXcEUUyS2ctNpVDk",
  authDomain: "login-c0596.firebaseapp.com",
  databaseURL: "https://login-c0596.firebaseio.com",
  projectId: "login-c0596",
  storageBucket: "login-c0596.appspot.com",
  messagingSenderId: "580747015916",
  appId: "1:580747015916:web:b82640733fdf9fe23517c9",
  measurementId: "G-QXLR6Q0P6K"
  };
if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}



