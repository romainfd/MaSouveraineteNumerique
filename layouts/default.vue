<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      class="justify-center"
    >
      <span>Souveraineté numérique &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      fixed: false
    }
  }
}
</script>

<style>
html {
  /* Ref.: https://jonaskuske.github.io/smoothscroll-anchor-polyfill/#start
      CSS custom property for the polyfill */
  --scroll-behavior: smooth;
  /* Normal CSS property for browsers with native support */
  scroll-behavior: smooth;
}
</style>
