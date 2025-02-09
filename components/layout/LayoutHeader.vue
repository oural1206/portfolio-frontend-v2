<script setup lang="ts">
import { isInViewport } from '@/composables/isInViewport'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const hdrSectionDisplay = ref('')
const isAtTop = ref(true)

let headerHeight = 0
let sections: NodeListOf<HTMLElement>

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  isAtTop.value = window.scrollY < headerHeight
  updateHeaderLink()
}

function updateHeaderLink() {
  const offset = window.innerHeight / 3
  sections.forEach((section) => {
    if (isInViewport(section, offset)) {
      const name = section.getAttribute('id')
      if (name) {
        hdrSectionDisplay.value = name
        return
      }
    }
  })
  hdrSectionDisplay.value = ''
}

onMounted(() => {
  const header = document.querySelector('header')
  if (header) {
    console.log(header.offsetHeight)
    headerHeight = header.offsetHeight + Number.parseInt(window.getComputedStyle(header).getPropertyValue('margin-top'), 10)
  }
  sections = document.querySelectorAll('section.header-display')

  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="{ scrolled: !isAtTop }">
    <NuxtLink to="/" class="title" @click="scrollToTop">
      <span class="name">Oural</span>
      <span class="section">/{{ hdrSectionDisplay }}</span>
    </NuxtLink>
    <div class="links">
      <NuxtLink to="/#about-me">#about-me</NuxtLink>
      <NuxtLink to="/#expériences">#expériences</NuxtLink>
      <NuxtLink to="/#compétences">#compétences</NuxtLink>
      <NuxtLink to="/#réalisations">#réalisations</NuxtLink>
      <NuxtLink to="/#contacts">#contacts</NuxtLink>
    </div>
  </header>
</template>

<style lang="sass" scoped>
@use "/assets/style/_variables" as *

header
  position: sticky
  top: 0
  left: 0
  z-index: 10
  background-color: $color-primary
  display: flex
  justify-content: space-between
  align-items: center
  padding: 1.25rem 5rem
  margin-top: 1.25rem
  &.scrolled
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.25)
  .title
    font-size: 1.375rem
    .section
      color: $color-highlight
  .links
    display: flex
    align-items: center
    gap: 2rem
    a
      font-weight: 700
      display: inline-block
      position: relative
      &::after
        content: ''
        position: absolute
        width: 100%
        transform: scaleX(0)
        bottom: -0.25rem
        left: 0
        height: 2px
        background-color: $color-highlight
        transform-origin: bottom right
        transition: transform 0.25s ease-out
      &:hover::after
        transform: scaleX(1)
        transform-origin: bottom left
      &:active::after
        transform: scaleY(1.5)
        transition: transform 0.075s ease-out
  @media (max-width: $l)
    .title
      font-size: 1.125rem
    .links
      gap: 1.5rem
      a
        font-size: 0.875rem
  @media (max-width: $m)
    justify-content: center
    .links
      display: none
</style>
