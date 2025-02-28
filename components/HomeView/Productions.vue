<script setup lang="ts">
import productionsData from '~/data/productions.json'

const productions = ref(productionsData)
</script>

<template>
  <section id="réalisations" class="header-display">
    <h2>Mes différentes réalisations <span>&#x1F9F1;</span></h2>
    <div class="container">
      <div v-for="(production, index) in productions" :key="index" class="production">
        <div class="thumbnail" :style="`background-image: url('${`/public-assets/productions-cover/${production.thumbnail}`}')`" />
        <div class="content">
          <div class="text">
            <h3>{{ production.name }}</h3>
            <p v-html="production.description" />
          </div>
          <ul class="tags">
            <li v-for="(tag, tagIndex) in production.tags" :key="tagIndex">
              <img :src="`/public-assets/skills-icons/${tag.icon}`" :alt="`Icon de ${tag.name}`">
              <span>{{ tag.name }}</span>
            </li>
          </ul>
          <img class="expand" src="/assets/icons/cross.svg" alt="Icon plus">
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@use "/assets/style/_variables" as *

#réalisations
  width: 100%
  background-color: $color-secondary
  color: $color-primary
  display: flex
  flex-direction: column
  @include padding
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
    justify-content: center
    flex-wrap: wrap
    gap: 2rem
    .production
      display: flex
      gap: 1rem
      background-color: $color-primary
      color: $color-secondary
      width: 40rem
      height: 20rem
      padding: 1.25rem
      border-radius: 1rem
      cursor: pointer
      transition: all 0.25s
      .thumbnail
        aspect-ratio: 1 / 1
        background-position: center
        background-size: cover
        border-radius: 0.75rem
      .content
        position: relative
        padding: 1rem
        display: flex
        flex-direction: column
        justify-content: space-between
        .text
          h3
            color: $color-white
            font-size: 1.5rem
            font-weight: 800
            margin-bottom: 1rem
          p
            font-size: 1rem
            line-height: 1.375
        .tags
          display: flex
          gap: 0.5rem
          li
            display: flex
            gap: 0.25rem
            align-items: center
            background-color: $color-secondary
            padding: 0.25rem
            border-radius: 0.25rem
            img
              filter: $filter-primary
              width: 1rem
              height: 1rem
            span
              color: $color-primary
              font-size: 0.825rem
              font-weight: 800
        .expand
          position: absolute
          bottom: 1.25rem
          right: 1rem
          width: 1rem
          height: 1rem
          filter: $filter-secondary
          transform: rotate(45deg)
      &:hover
        transform: scale(1.0125)
        box-shadow: 0 0 2rem rgba(0, 70, 67, 0.75)
</style>
