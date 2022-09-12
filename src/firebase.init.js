// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDoQO262ZufImmHu6znSaRrifHilp1L3OE",
    authDomain: "tcm-food-website.firebaseapp.com",
    projectId: "tcm-food-website",
    storageBucket: "tcm-food-website.appspot.com",
    messagingSenderId: "190719142702",
    appId: "1:190719142702:web:37ad5a862636248dffe8bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;