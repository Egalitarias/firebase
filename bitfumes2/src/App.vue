<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-btn icon @click="loginClick">
        <v-icon>person</v-icon>
      </v-btn>

      <HelloWorld />

      <input
        class="inputfile"
        type="file"
        accept="video/*"
        capture="camera"
        id="recorder"
        name="recorder"
      />
      <v-btn value="hello" v-show="openVideoRecorder">
        <span>hello</span>
      </v-btn>
      <v-bottom-navigation v-show="showPopup">
        <v-btn value="upload" @click="uploadClick">
          <span>Upload</span>
          <v-icon>mdi-folder-upload</v-icon>
        </v-btn>

        <v-btn value="photo" @click="photoClick">
          <span>Photo</span>
          <v-icon>mdi-camera</v-icon>
        </v-btn>

        <v-btn value="video" @click="videoClick">
          <span>Video</span>
          <v-icon>mdi-video</v-icon>
        </v-btn>
      </v-bottom-navigation>

      <v-bottom-navigation v-show="loggedIn">
        <v-btn value="add" @click="addClick">
          <span>Add</span>
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-content>
  </v-app>
</template>

<script>
import firebase from "firebase";
import "firebase/firestore";

import HelloWorld from "./components/HelloWorld";

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

export default {
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    showPopup: false,
    openVideoRecorder: false,
    loggedIn: true
    //
  }),
  methods: {
    loginClick() {
      console.log("loginClick");
      firebase
        .auth()
        .signInWithEmailAndPassword("gary@gmail.com", "password")
        .then(function(firebaseUser) {
          //this.loggedIn = true;
          alert("Logged in " + firebaseUser.user.email);
          console.log("Logged in");
        })
        .catch(function(/*error*/) {
          this.loggedIn = false;
          alert("Log in failed");
        });
    },
    addClick() {
      console.log("addClick");
      this.showPopup = !this.showPopup;
    },
    uploadClick() {
      alert("uploadClick");
    },
    photoClick() {
      alert("photoClick");
    },
    videoClick() {
      this.openVideoRecorder = true;
    }
  }
};
</script>
