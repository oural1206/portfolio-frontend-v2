<script setup lang="ts">

</script>

<template>
  <section id="services" class="header-display">
    <h3><span>&#9888;</span> Je suis actuellement indisponible pour toutes demandes de services (hors audiovisuel) <span>&#9888;</span></h3>
  </section>
</template>

<style scoped lang="sass">
@use "/assets/style/_variables" as *

#services
  width: 100%
  background-color: $color-primary
  color: $color-secondary
  display: flex
  flex-direction: column
  padding: 3rem
  h3
    font-weight: 800
    font-size: 1.5rem
    text-align: center
    span
      margin: 0 0.5rem
</style>
