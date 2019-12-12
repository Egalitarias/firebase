<template>
  <div>
    <h1>Profile</h1>
    <button @click="landing">Landing</button>
    <button @click="pushLanding">Push Landing</button>
    <button @click="replaceLanding">Replace Landing</button>
    <button @click="pushPost">Push Post</button>
    <button @click="replacePost">Replace Post</button>
    <button @click="back">Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    landing() {
      this.$router.replace("");
    },
    pushLanding() {
      this.$router.push("landing");
    },
    replaceLanding() {
      this.$router.replace("/");
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
