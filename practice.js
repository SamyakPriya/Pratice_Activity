
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBpmgAr_T5XYBRz_YNmGG410_3UumKk-dY",
    authDomain: "kwiter-4c140.firebaseapp.com",
    databaseURL: "https://kwiter-4c140-default-rtdb.firebaseio.com",
    projectId: "kwiter-4c140",
    storageBucket: "kwiter-4c140.appspot.com",
    messagingSenderId: "321375326393",
    appId: "1:321375326393:web:9552780fd05dc8c9428b68"
};

firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child("user_name").update({
        purpose : "adding user"
    });
}