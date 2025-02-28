<script setup lang="ts">
import AboutMe from '~/components/HomeView/About-me.vue'
import Competences from '~/components/HomeView/Competences.vue'
import Contacts from '~/components/HomeView/Contacts.vue'
import Experiences from '~/components/HomeView/Experiences.vue'
import HeroBanner from '~/components/HomeView/HeroBanner.vue'
import Productions from '~/components/HomeView/Productions.vue'

useHead({
  title: 'Portfolio - Jules',
})
</script>

<template>
  <div>
    <HeroBanner />
    <AboutMe />
    <Experiences />
    <Competences />
    <Productions />
    <Contacts />
  </div>
</template>
