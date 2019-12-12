<template>
  <v-container>
    Landing v2.0.2
    <p style="margin-bottom:50px"></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <v-bottom-navigation>
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

    <v-btn value="add" @click="onClickAddButton">
      <span>Add</span>
      <v-icon>mdi-plus-circle-outline</v-icon>
    </v-btn>

    <v-bottom-navigation>
      <v-btn value="add">
        <span>Add</span>
        <v-icon>mdi-plus-circle-outline</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-container>
</template>

export default {
    data() {
      return {
        //showSecondToolbar: false
      };
    },
  methods: {
      onClickAddButton() {
        console.log("onClickAddButton");
        this.showSecondToolbar = !this.showSecondToolbar;
      }
  }

}