<script setup lang="ts">
const name = ref('')
const email = ref('')
const object = ref('')
const message = ref('')

function sendMessage(event: Event) {
  event.preventDefault()
  event.preventDefault()
  const form = event.target as HTMLElement
  const button = form.querySelector('button') as HTMLButtonElement
  const data = {
    name: name.value,
    email: email.value,
    object: object.value,
    message: message.value,
    token: localStorage.getItem('token'),
  }
  button.disabled = true
  button.textContent = 'Envoi en cours...'
  console.log(data)
  // API Request
  button.textContent = 'Envoyer !'
  button.textContent = 'Erreur :('
  button.disabled = false
}
</script>

<template>
  <section id="contacts" class="header-display">
    <h2>Contactez-moi<span>&#128242;</span></h2>
    <div class="container">
      <div class="details">
        <h3>Mes coordonnées</h3>
        <div class="items">
          <div id="phone" class="item" />
          <div id="email" class="item">
            <NuxtImg src="/assets/icons/envelope.svg" width="32" height="32" alt="Enveloppe" />
            <div>
              <h4>Email</h4>
              <p><a href="mailto:me@oural.dev">me@oural.dev</a>, <a href="mailto:support@oural.dev">support@oural.dev</a></p>
            </div>
          </div>
          <div id="address" class="item" />
        </div>
      </div>
      <form @submit="sendMessage">
        <input v-model="name" style="flex: 40%" type="text" placeholder="Nom" required>
        <input v-model="email" style="flex: 40%" type="email" placeholder="Email" required>
        <input v-model="object" type="text" placeholder="Objet" required>
        <textarea v-model="message" rows="5" placeholder="Message" required />
        <button type="submit">
          Envoyer !
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped lang="sass">
@use "/assets/style/_variables" as *

#contacts
  background-color: $color-secondary
  color: $color-primary
  width: 100%
  display: flex
  flex-direction: column
  @include padding
  h2
    font-weight: 900
    font-size: 1.625rem
    margin-bottom: 5rem
    text-align: center
    span
      margin-left: 0.5rem
      font-size: 2rem
  .container
    display: flex
    .details
      flex: 50%
      h3
        font-weight: 800
        font-size: 1.5rem
        margin-bottom: 2rem
      .items
        display: flex
        flex-direction: column
        gap: 1.5rem
        .item
          display: flex
          align-items: center
          img
            margin-right: 1rem
            filter: $filter-primary
          div
            h4
              font-weight: 800
              font-size: 1.125rem
              margin-bottom: 0.5rem
            p, a
              font-size: 1rem
    form
      flex: 50%
      display: flex
      flex-wrap: wrap
      gap: 1rem
      input, textarea
        flex: 100%
        font-size: 0.825rem
      button
        flex: 100%
  @media (max-width: $m)
    .container
      flex-direction: column
      gap: 5rem
  @media (max-width: $xs)
    .container form input
      flex: inherit !important
</style>
