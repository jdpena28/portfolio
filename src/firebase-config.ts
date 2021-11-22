import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDqPmB95KEfi-iABS3CbWbUDWesRCqBrxk",
    authDomain: "portfolio-database-70828.firebaseapp.com",
    projectId: "portfolio-database-70828",
    storageBucket: "portfolio-database-70828.appspot.com",
    messagingSenderId: "752340857526",
    appId: "1:752340857526:web:a06469bb8aa602a6222c17"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

