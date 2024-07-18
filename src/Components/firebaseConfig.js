import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDNzNRPTjiK-mqYBqmvb0YgRYp9fF17XKw",
    authDomain: "travel-web-fb261.firebaseapp.com",
    databaseURL: "https://travel-web-fb261-default-rtdb.firebaseio.com",
    projectId: "travel-web-fb261",
    storageBucket: "travel-web-fb261.appspot.com",
    messagingSenderId: "612509964838",
    appId: "1:612509964838:web:0333e561a65c8a54f3a4e7",
    measurementId: "G-99Y3Y28KKD"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
