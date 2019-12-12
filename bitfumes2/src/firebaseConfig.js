// https://savvyapps.com/blog/definitive-guide-building-web-app-vuejs-firebase

import firebase from "firebase";
import "firebase/firestore";

// firebase init goes here
const config = {
  apiKey: "AIzaSyAbX4CbKTDhAzmhV68ZDV0ricslJyXu2us",
  authDomain: "hoverit-5038a.firebaseapp.com",
  databaseURL: "https://hoverit-5038a.firebaseio.com",
  projectId: "hoverit-5038a",
  storageBucket: "hoverit-5038a.appspot.com",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(config);

// firebase utils
const db = firebase.firestore();
const firestore = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const currentUser = auth.currentUser;

// date issue fix according to firebase
const settings = {
  timestampsInSnapshots: true
};
db.settings(settings);

// firebase collections
const usersCollection = db.collection("users");
const postsCollection = db.collection("posts");
const commentsCollection = db.collection("comments");
const likesCollection = db.collection("likes");

export {
  db,
  firestore,
  storage,
  auth,
  currentUser,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
};
