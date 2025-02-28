<script setup lang="ts">
import competencesData from '~/data/competences.json'

const competences = ref(competencesData)
</script>

<template>
  <section id="compétences" class="header-display">
    <h2>Mes principales compétences <span>&#127891;</span></h2>
    <div class="columns">
      <div v-for="(category, index) in competences" :key="index">
        <h4 v-html="category.categoryName" />
        <ul>
          <li v-for="(item, subIndex) in category.skills" :key="subIndex">
            <img :src="`/public-assets/skills-icons/${item.icon}`" :alt="`Icon de ${item.name}`">
            <span>{{ item.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@use "/assets/style/_variables" as *

#compétences
  width: 100%
  background-color: $color-primary
  color: $color-secondary
  display: flex
  flex-direction: column
  @include padding
  h2
    color: #fff
    font-weight: 900
    font-size: 1.625rem
    margin-bottom: 5rem
    text-align: center
    span
      margin-left: 0.5rem
      font-size: 2rem
  .columns
    display: flex
    justify-content: space-between
    gap: 5rem
    h4
      font-size: 1.25rem
      font-weight: 700
      margin-bottom: 1.75rem
    ul
      list-style-type: none
      display: flex
      flex-direction: column
      gap: 0.5rem
      li
        font-size: 1rem
        margin: 0 0 0.5rem
        display: flex
        align-items: center
        gap: 0.5rem
        img
          height: 1.5rem
          width: 1.5rem
          filter: $filter-highlight
</style>
