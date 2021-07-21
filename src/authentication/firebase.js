import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp( {
	apiKey: "AIzaSyBR-O7MPdQXBNuthEIXgCtm1Nw1fT13EkU",
	authDomain: "unichat-44b8e.firebaseapp.com",
	projectId: "unichat-44b8e",
	storageBucket: "unichat-44b8e.appspot.com",
	messagingSenderId: "308106519907",
	appId: "1:308106519907:web:8a842395cfee755e819f56"
}).auth();