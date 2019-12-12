<template>
  <div id="app">
    <v-app id="inspire">
      <v-bottom-navigation v-model="bottomNav">
        <v-btn value="recent">
          <span>Recent</span>
          <v-icon>mdi-history</v-icon>
        </v-btn>

        <v-btn value="favorites">
          <span>Favorites</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Nearby</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-app>
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
