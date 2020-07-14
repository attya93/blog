import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// Your web app's Firebase configuration
const Config = {
    apiKey: "AIzaSyCiZ_B8tfJCWGfaPajLpj_yyycvInZtm4Y",
    authDomain: "blog-fdb0c.firebaseapp.com",
    databaseURL: "https://blog-fdb0c.firebaseio.com",
    projectId: "blog-fdb0c",
    storageBucket: "blog-fdb0c.appspot.com",
    messagingSenderId: "795814455159",
    appId: "1:795814455159:web:9cc1cdf53e7939c6d26372",
    measurementId: "G-061J7SC228"
};
firebase.initializeApp(Config);
firebase.firestore();
export default firebase;
