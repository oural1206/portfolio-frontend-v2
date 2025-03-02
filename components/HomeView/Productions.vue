<script setup lang="ts">
const { data: productions } = await useAsyncData(() => queryCollection('productions').all())
const currentProduction: any = ref(null)
</script>

<template>
  <section id="réalisations" class="header-display">
    <h2>Mes différentes réalisations <span>&#x1F9F1;</span></h2>
    <div class="container">
      <div v-for="(production, index) in productions" :key="index" class="production" @click="currentProduction = production">
        <div class="thumbnail" :style="`background-image: url('/assets/productions-img/${production.meta.cover}')`" />
        <div class="content">
          <div class="text">
            <h3>{{ production.title }}</h3>
            <p v-html="production.description" />
          </div>
          <ul class="tags">
            <li v-for="(tag, tagIndex) in production.meta.competences" :key="tagIndex">
              <NuxtImg :src="`/assets/skills-icons/${tag.icon}`" :alt="`Icon de ${tag.name}`" />
              <span>{{ tag.name }}</span>
            </li>
          </ul>
          <NuxtImg class="expand" src="/assets/icons/cross.svg" alt="Icon plus" />
        </div>
      </div>
    </div>
    <div v-if="currentProduction" class="reader">
      <div class="background" @click="currentProduction = null" />
      <div class="container">
        <NuxtImg class="close-btn" src="/assets/icons/cross.svg" alt="Icon fermer" @click="currentProduction = null" />
        <ContentRenderer class="content" :value="currentProduction" />
      </div>
    </div>
  </section>
</template>

<style lang="sass">
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
    gap: 5rem
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
        .expand
          filter: $filter-highlight
    @media (max-width: $m)
      gap: 3.5rem
      .production
        width: 90%
        height: auto
        flex-direction: column
        .content
          gap: 2.5rem
  .reader
    .container
      z-index: 15
      position: fixed
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      padding: 3rem
      border-radius: 5px
      width: 50vw
      color: $color-secondary
      background-color: $color-primary
      .content
        width: 100%
        height: 100%
        text-align: left
        h1, h2
          color: $color-white
      .close-btn
        position: absolute
        top: 1.5rem
        right: 1.5rem
        width: 1.5rem
        height: 1.5rem
        filter: $filter-secondary
        cursor: pointer
        &:hover
          filter: $filter-highlight
    .background
      z-index: 10
      position: fixed
      top: 0
      left: 0
      height: 100%
      width: 100%
      background-color: rgba(0, 30, 29, 0.75)
      backdrop-filter: blur(7.5px)
  @media (max-width: 2000px)
    padding: 7.5rem 5rem
  @media (max-width: $l)
    padding: 5rem
  @media (max-width: $m)
    padding: 3.75rem
  @media (max-width: $xs)
    padding: 3.75rem 2rem
</style>
