<template>
  <div>
    <h1>Post</h1>
    <button @click="landing">Landing</button>
    <button @click="pushProfile">Push Profile</button>
    <button @click="replaceProfile">Replace Profile</button>
    <button @click="back">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    landing() {
      this.$router.replace("/");
    },
    pushProfile() {
      this.$router.push("profile");
    },
    replaceProfile() {
      this.$router.replace("/profile");
    },
    back() {
      this.$router.back();
    }
  }
};
</script>

<style></style>
