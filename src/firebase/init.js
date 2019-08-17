import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: "'AIzaSyAHxyV8Y6ZgI4RsC9O_CYGC65F8z76U178'",
  authDomain: "'biosprout-3fa30.firebaseapp.com'",
  databaseURL: "'https://biosprout-3fa30.firebaseio.com'",
  projectId: "'biosprout-3fa30'",
  storageBucket: "'biosprout-3fa30.appspot.com'",
  messagingSenderId: "'435481551762'",
  appId: "'1:435481551762:web:955229d024e93e5f'"
}

firebase.initializeApp(config)
