<template>
  <v-container>
    <v-btn value="add" @click="add">
      <span>Add</span>
      <v-icon>mdi-plus-circle-outline</v-icon>
    </v-btn>
  </v-container>
</template>

export default {
  methods: {
      add() {
        console.log("add");
      }
  }

}