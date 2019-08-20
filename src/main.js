import Vue from 'vue';
import firebase from 'firebase';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

let app = '';
const config = {
  apiKey: "AIzaSyAKWTlQHKeJ70Rdj-i72hTVTSbCvKvhS28",
  authDomain: "zooware-4096e.firebaseapp.com",
  databaseURL: "https://zooware-4096e.firebaseio.com",
  projectId: "zooware-4096e",
  storageBucket: "zooware-4096e.appspot.com",
  messagingSenderId: "1006273390199",
  appId: "1:1006273390199:web:0ead82fc8a64fdc2"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    /* eslint-disable no-new */
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app');
  }
});
