<script setup lang="ts">
import experiencesData from '~/data/experiences.json'

const experiences = ref(experiencesData)
</script>

<template>
  <section id="expériences" class="header-display">
    <div class="title">
      <h2>Expériences en milieu professionnel <span>&#129309;</span></h2>
      <p>Je suis tellement motivé pour faire de ma passion mon métier que mon objectif est de commencer à faire des stages, y compris de façon volontaire.</p>
    </div>
    <div class="separation" />
    <div class="list">
      <div v-for="(item, index) in experiences" :key="index" class="item">
        <div class="left">
          <img :src="`/public-assets/company-logos/${item.image}`" :alt="`Logo de l'entreprise ${item.name}`">
          <p v-html="item.description" />
        </div>
        <div class="right">
          <h3>{{ item.title }}</h3>
          <p v-html="item.text" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@use "/assets/style/_variables" as *

#expériences
  width: 100%
  background-color: $color-primary
  color: $color-secondary
  display: flex
  flex-direction: column
  @include padding
  .title
    display: flex
    flex-direction: column
    align-items: center
    text-align: center
    h2
      font-weight: 900
      font-size: 1.625rem
      color: $color-white
      margin-bottom: 1rem
      span
        margin-left: 0.5rem
        font-size: 2rem
    p
      max-width: 65%
  .separation
    width: 75%
    position: relative
    left: 50%
    transform: translateX(-50%)
    height: 1px
    background-color: $color-highlight
    margin-top: 5rem
  .list
    display: flex
    flex-direction: column
    .item
      display: flex
      justify-content: space-between
      margin: 5rem
      .left
        display: flex
        align-items: start
        flex-direction: column
        max-width: 25%
        img
          max-height: 3.75rem
          max-width: 10rem
          margin-bottom: 1.25rem
      .right
        display: flex
        flex-direction: column
        width: 65%
        h3
          margin-bottom: 1.25rem
  @media (max-width: $xl)
    .item
      margin: 5rem 0 !important
  @media (max-width: $m)
    .separation
      width: inherit
  @media (max-width: $s)
    .item
      flex-direction: column
      gap: 2.5rem
      .right
        width: inherit !important
      .left
        max-width: inherit !important
</style>
