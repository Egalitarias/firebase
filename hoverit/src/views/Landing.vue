<template>
  <div>
    <h1>Landing</h1>
    <button @click="pushProfile">Push Profile</button>
    <button @click="replaceProfile">Replace Profile</button>
    <button @click="pushPost">Push Post</button>
    <button @click="replacePost">Replace Post</button>
    <button @click="back">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    pushProfile() {
      this.$router.push("profile");
    },
    replaceProfile() {
      this.$router.replace("/profile");
    },
    pushPost() {
      this.$router.push("post");
    },
    replacePost() {
      this.$router.replace("/post");
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style></style>
