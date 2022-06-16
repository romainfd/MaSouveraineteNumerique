<template>
  <v-app>
    <v-main>
      <v-container>
        <NuxtLink to="/" class="text-decoration-none black--text">
          <h1 id="title" class="display-2 my-8 text-center">
            <img src="/logo.png" alt="Logo Ma Souveraineté Numérique" class="mr-n2 mr-md-0">
            Ma Souveraineté Numérique
          </h1>
        </NuxtLink>
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
#title img {
  height: 1.5em;
  position: relative;
  top: .25em;
}

html {
  /* Ref.: https://jonaskuske.github.io/smoothscroll-anchor-polyfill/#start
      CSS custom property for the polyfill */
  --scroll-behavior: smooth;
  /* Normal CSS property for browsers with native support */
  scroll-behavior: smooth;
}

p.overline {
  line-height: 20px !important;
}
</style>
