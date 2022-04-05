<template>
  <p class="font-italic text--secondary">
    Ce site est développé dans une approche collaborative et de partage de bonnes pratiques.
    Tout le code est donc disponible sur
    <a
      href="https://github.com/romainfd/MaSouveraineteNumerique"
      target="_blank"
      class="text-decoration-none"
    >
      <v-icon
        color="blue"
        small
        class="pb-1"
      >
        mdi-github
      </v-icon>
      GitHub</a>.
    {{ pageSpecificText }}
  </p>
</template>
<script>
export default {
  name: 'ColabParagraph',
  props: {
    pageSpecificText: {
      type: String,
      default: null
    }
  }
}
</script>
