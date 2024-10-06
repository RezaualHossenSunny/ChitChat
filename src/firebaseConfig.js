
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC1R_iwfHh1paZciVA-kPLlYqL1GcRTb6k",
  authDomain: "talk-bb162.firebaseapp.com",
  projectId: "talk-bb162",
  storageBucket: "talk-bb162.appspot.com",
  messagingSenderId: "1035827912556",
  appId: "1:1035827912556:web:8433491f385c197ea09d49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig