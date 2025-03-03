<script setup lang="ts">
const img = useImage()
const { data: productions } = await useAsyncData(() => queryCollection('productions').all())

const currentProduction: any = ref(null)

watch(currentProduction, (newValue) => {
  if (newValue) {
    document.body.classList.add('no-scroll')
  }
  else {
    document.body.classList.remove('no-scroll')
  }
})
</script>

<template>
  <section id="réalisations" class="header-display">
    <h2>Mes différentes réalisations <span>&#x1F9F1;</span></h2>
    <div class="container">
      <div v-for="(production, index) in productions" :key="index" class="production" @click="currentProduction = production">
        <div class="thumbnail" :style="`background-image: url('${img(`/assets/productions-img/${production.meta.cover}`)}')`" />
        <div class="content">
          <div class="text">
            <h3>{{ production.title }}</h3>
            <p v-html="production.description" />
          </div>
          <ul class="tags">
            <li v-for="(tag, tagIndex) in production.meta.competences.slice(0, 3)" :key="tagIndex">
              <NuxtImg :src="`/assets/skills-icons/${tag.icon}`" :alt="`Icon de ${tag.name}`" />
              <span>{{ tag.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="currentProduction" class="reader">
      <div class="background" @click="currentProduction = null" />
      <div class="container">
        <NuxtImg class="close-btn" src="/assets/icons/cross.svg" alt="Icon fermer" @click="currentProduction = null" />
        <h1>{{ currentProduction.title }}</h1>
        <ul class="tags">
          <li v-for="(tag, tagIndex) in currentProduction?.meta.competences" :key="tagIndex">
            <NuxtImg :src="`/assets/skills-icons/${tag.icon}`" :alt="`Icon de ${tag.name}`" />
            <span>{{ tag.name }}</span>
          </li>
        </ul>
        <ContentRenderer class="content" :value="currentProduction" />
      </div>
    </div>
  </section>
</template>

<style lang="sass">
@use "/assets/style/_variables" as *
@use "/assets/style/content-style" as *

body.no-scroll
  height: 100%
  overflow-y: hidden

#réalisations
  width: 100%
  background-color: $color-secondary
  color: $color-primary
  display: flex
  flex-direction: column
  @include padding
  > h2
    font-weight: 900
    font-size: 1.625rem
    margin-bottom: 7.5rem
    text-align: center
    span
      margin-left: 0.5rem
      font-size: 2rem
  > .container
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
        padding: 1rem 1.5rem 1rem 1rem
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
      &:hover
        transform: scale(1.0125)
        box-shadow: 0 0 2rem rgba(0, 70, 67, 0.75)
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
      display: flex
      align-items: center
      flex-direction: column
      position: fixed
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      padding: 3rem
      border-radius: 0.75rem
      width: 62.5vw
      max-height: 95vh
      color: $color-secondary
      background-color: $color-primary
      > h1
        font-size: 2rem
        color: $color-white
        font-weight: 800
        margin-bottom: 2rem
      .tags
        max-width: 80%
        flex-wrap: wrap
        justify-content: center
        margin-bottom: 1.5rem
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
      .content
        width: 100%
        height: 100%
        overflow-y: scroll
        padding-right: 1rem
        @include content-style
      ::-webkit-scrollbar
        width: 5px
        height: 5px
        background: rgba(0, 0, 0, 0)
      ::-webkit-scrollbar-thumb
        border-radius: 1rem
        background: $color-highlight
        &:active
          background: $color-wrong
    .background
      z-index: 10
      position: fixed
      top: 0
      left: 0
      height: 100%
      width: 100%
      background-color: rgba(0, 30, 29, 0.75)
      backdrop-filter: blur(7.5px)
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
  @media (max-width: 2000px)
    padding: 7.5rem 5rem
  @media (max-width: $l)
    padding: 5rem
    .reader .container
      padding: 2rem 1.25rem
      width: 95vw
  @media (max-width: $m)
    padding: 3.75rem
  @media (max-width: $xs)
    padding: 3.75rem 2rem
</style>
