<style scoped>
.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
</style>

<template>
  <v-container>
    Login V1.0.4
    <v-btn icon @click="onLoginButton">
      <v-icon>person</v-icon>
    </v-btn>
    <v-btn icon @click="onPersonButton">
      <v-icon>person</v-icon>
    </v-btn>
    {{ message }}
    <label for="recorder">Click Me</label>
    <input
      class="inputfile"
      type="file"
      accept="video/*"
      capture="camera"
      id="recorder"
      name="recorder"
    />
    <video id="player" controls></video>
  </v-container>
</template>
<script>
const firebase = require("../firebaseConfig.js");

export default {
  data() {
    return {
      message: "",
      firebae: ""
    };
  },
  methods: {
    recorderChanged(e) {
      //alert("bound changed");
      var file = e.target.files[0];
      //alerty("got file");
      this.upload(file);
    },
    onLoginButton() {
      var recorder = document.getElementById("recorder");
      /*
      recorder.addEventListener("change", function(e) {
        var file = e.target.files[0];
        //alerty("got file");
        upload(file);
      });
      */
      recorder.addEventListener("change", this.recorderChanged);

      this.firebase = firebase;
      firebase.auth
        .signInWithEmailAndPassword("gary@gmail.com", "password")
        .then(function(firebaseUser) {
          alert("Logged in " + firebaseUser.user.email);
          console.log("Logged in");
          //this.message = "Logged in";
          //console.log("ok");
          //console.debug("logged in " + firebaseUser.user.email);
          //email.innerHTML = firebaseUser.user.email;
        })
        .catch(function(/*error*/) {
          alert("Log in failed");
          //this.message = "error";
          // Handle Errors here.
          //var errorCode = error.code;
          //var errorMessage = error.message;
          //email.innerHTML = "Not logged in";
          // ...
        });
    },
    onPersonButton() {
      alerty("onPersonButton");
      this.message = "onPersonButton";
    },
    alerty(message) {
      alert("alerty " + message);
    },
    upload(file) {
      console.log("upload");
      const fileName = this.uuidv4() + ".mp4";
      var storageRef = this.firebase.storage.ref(fileName);
      console.log(fileName);
      //displayText("fileName", fileName);
      var metadata = {
        contentType: "video/mp4"
      };
      storageRef.put(file, metadata).then(function(snapshot) {
        //displayMessage("Uploaded a blob or file!");
        //snapshot.ref.getDownloadURL().then(function(/*downloadURL*/) {});
      });

      var user = this.firebase.auth.currentUser;
      this.firebase.firestore
        .collection("media")
        .add({
          fileName: fileName,
          contentType: "video/mp4",
          email: user.email,
          userId: user.uid
        })
        .then(function() {})
        .catch(function(/*error*/) {});
    } /*,
    displayText(message) {
      message = message + ".";
    },
    displayMessage(message) {
      message = message + ".";
    }*/,
    uuidv4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        var r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }
  }
};

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
</script>
