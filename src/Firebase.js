import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCX3mZbbomlVXLtobDq-rQ_05d2Qu6SCuQ",
    authDomain: "testproject-68fb8.firebaseapp.com",
    databaseURL: "https://testproject-68fb8.firebaseio.com",
    projectId: "testproject-68fb8",
    storageBucket: "testproject-68fb8.appspot.com",
    messagingSenderId: "546048212343"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;