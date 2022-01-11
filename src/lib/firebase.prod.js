import Firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import { seedDatabase } from '../seed'

const config = {
    apiKey: "AIzaSyBj_JM1WwSObgYNBChCdbwhyqrzZos6NSg",
    authDomain: "netflix-clone-b3a16.firebaseapp.com",
    projectId: "netflix-clone-b3a16",
    storageBucket: "netflix-clone-b3a16.appspot.com",
    messagingSenderId: "259828759854",
    appId: "1:259828759854:web:3b905bc8ff7ecf081acebf"
}

const firebase = Firebase.initializeApp(config)

// seedDatabase(firebase)

export default firebase