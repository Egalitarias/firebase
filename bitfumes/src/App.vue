<style scoped>
i {
  display: inline-block;
  text-decoration: none;
}
a {
  display: inline-block;
  text-decoration: none;
}
v-icon {
  font-size: 50;
}
</style>

<template>
  <v-app>
    <v-content>
      <div>
        <v-toolbar>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>

          <v-spacer></v-spacer>

          <router-link to="/Landing">
            <v-btn icon>
              <v-icon>autorenew</v-icon>
            </v-btn>
          </router-link>
          <router-link to="/Upload">
            <v-btn icon>
              <v-icon>folder</v-icon>
            </v-btn>
          </router-link>
          <router-link to="/Photo">
            <v-btn icon>
              <v-icon>camera_alt</v-icon>
            </v-btn>
          </router-link>
          <router-link to="/Video">
            <v-btn icon>
              <v-icon>videocam</v-icon>
            </v-btn>
          </router-link>
          <router-link to="/Login">
            <v-btn icon>
              <v-icon>person</v-icon>
            </v-btn>
          </router-link>
        </v-toolbar>
      </div>

      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
