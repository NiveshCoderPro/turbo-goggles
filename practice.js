
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBJq3oOXX74kFDypdk2L1NzxP0AL4n_s9U",
    authDomain: "kwitter-eeff1.firebaseapp.com",
    databaseURL: "https://kwitter-eeff1-default-rtdb.firebaseio.com",
    projectId: "kwitter-eeff1",
    storageBucket: "kwitter-eeff1.appspot.com",
    messagingSenderId: "144859891610",
    appId: "1:144859891610:web:0b58e6cb07c7b518251c23"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function add_user() {
    username = document.getElementById("username").value;

console.log(username);
    firebase.database().ref("/").child(username).update({
        purpose : "adding user name"
    });
}