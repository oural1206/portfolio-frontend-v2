<script setup lang="ts">
import advicesData from '~/data/advices.json'

const advices = ref(advicesData)
</script>

<template>
  <section id="recommandations" class="header-display">
    <h2>Recommandations <span>&#9997;</span></h2>
    <div class="container">
      <div v-for="(advice, index) in advices" :key="index" class="advice">
        <span class="picture">
          <NuxtImg class="profile" :src="`/assets/customers-pp/${advice.profilePicture}`" :alt="`Photo de ${advice.name}`" />
          <NuxtImg class="logo" :src="`/assets/company-logos/${advice.companyLogo}`" :alt="`Logo de ${advice.companyName}`" />
        </span>
        <h4>{{ advice.name }}</h4>
        <span class="company-name">{{ advice.companyName }}</span>
        <p v-html="advice.comment" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@use "/assets/style/_variables" as *

#recommandations
  width: 100%
  background-color: $color-secondary
  color: $color-primary
  display: flex
  flex-direction: column
  padding: 10rem
  h2
    font-weight: 900
    font-size: 1.625rem
    margin-bottom: 7.5rem
    text-align: center
    span
      margin-left: 0.5rem
      font-size: 2rem
  .container
    display: flex
    align-items: start
    justify-content: center
    gap: 5rem
    flex-wrap: wrap
    .advice
      display: flex
      flex-direction: column
      align-items: center
      width: 22.5rem
      border: 0.375rem solid $color-primary
      border-radius: 1rem
      padding: 0 2rem 2rem 2rem
      box-shadow: 0 0 1rem rgba(0, 70, 67, 0.25)
      .picture
        position: relative
        width: 7.5rem
        height: 7.5rem
        margin-bottom: -2rem
        transform: translateY(-50%)
        .profile
          width: 100%
          height: 100%
          border: 0.25rem solid $color-primary
          border-radius: 50%
        .logo
          background-color: $color-primary
          padding: 0.25rem
          border-radius: 50%
          position: absolute
          width: 40%
          height: 40%
          bottom: 0
          right: 0
          transform: translate(10%, 10%)
      h4
        font-size: 1.25rem
        font-weight: 800
        margin-bottom: 0.25rem
      .company-name
        font-size: 1rem
        font-weight: 600
        font-style: italic
        margin-bottom: 1.25rem
      p
        font-size: 1rem
        line-height: 1.5
  @media (max-width: 1600px)
    padding: 7.5rem 5rem
  @media (max-width: $l)
    padding: 5rem
  @media (max-width: $m)
    padding: 3.75rem
  @media (max-width: $xs)
    padding: 3.75rem 2rem
</style>
