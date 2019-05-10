<template>
  <v-app dark>
    <v-toolbar
      fixed
      app
    >
      <v-spacer />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>

    <v-content>
      <nuxt />
    </v-content>

    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      fixed: false,
      title: 'Nuxt Keep'
    }
  }
}
</script>
