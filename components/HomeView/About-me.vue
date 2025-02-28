<script setup lang="ts">

</script>

<template>
  <section id="about-me" class="header-display">
    <div class="first">
      <h2>Qui suis-je ?</h2>
      <p>
        Un lycéen de 17 ans en classe de terminale au Lycée des Iris à Lormont.
        <br><br>
        Depuis tout petit, j’ai toujours eu l’esprit créatif et curieux, c’est pourquoi le monde numérique et le développement informatique sont très vite devenus pour moi une source d’inspiration et une réelle passion où je pouvais exprimer librement ma créativité.
        <br><br>
        A l’âge de 10 ans, j’ai débuté la programmation par blocs, via la robotique Lego EV3. Cela m’a stimulé et a été une révélation pour moi.
        <br><br>
        Deux ans après, ayant envie d’aller plus loin, j'ai expérimenté le langage Python et j’ai vite basculé sur LUA via l’api de Roblox (univers de jeux 3D).
        <br><br>
        Aujourd’hui, je suis toujours en constante progression et en quête de perfectionnement. J’ai pu développer de nouvelles compétences et enrichir ma méthodologie de manière autodidacte.
      </p>
    </div>
    <div class="second">
      <div style="max-width: 70%">
        <h2>Mon projet d’orientation <span>&#128640;</span></h2>
        <ul>
          <li>J'ai choisi les options : Maths, NSI et Physique Chimie (abandonnée en terminale) pour pouvoir intégrer un IUT Génie Électrique Informatique Industrielle et passer un diplôme d'ingénieur par la suite.</li>
          <li>Je compte me spécialiser dans le domaine de l’informatique mais aussi me développer à côté dans d’autres secteurs comme la mécatronique ou la réalisation vidéo.</li>
          <li>En attendant, je participe à de nombreux projets en équipe et je me consacre aussi à de petites réalisations personnelles qui me permettent d'acquérir toujours plus de compétences.</li>
        </ul>
      </div>
      <div style="max-width: 25%">
        <h3>Le développement,<br>mais pas que...</h3>
        <p>En dehors du ma passion pour le monde numérique, j'aime aussi consacrer du temps à mes autres passions comme le pilotage de drones, la réalisation vidéo / photographique ou encore le sport.</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
@use "/assets/style/_variables" as *

#about-me
  width: 100%
  background-color: $color-secondary
  color: $color-primary
  display: flex
  flex-direction: column
  @include padding
  h2, h3
    font-weight: 900
    margin: 5rem 0 2rem 0
    span
      margin-left: 0.5rem
      font-size: 1.75rem
  .first
    margin-bottom: 2.5rem
    h2
      margin-top: 0
    p
      max-width: 62.5rem
  .second
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    div
      max-width: 75%
      @media (max-width: $xl)
        max-width: none
      h3
        font-size: 1.25rem
      ul
        margin-left: 2rem
        li
          margin: 0.75rem 0
  @media (max-width: $l)
    .first
      margin-bottom: 0
    div
      max-width: none !important
  @media (max-width: $m)
    h2, h3
      margin: 2.5rem 0 2rem 0
  @media (max-width: $s)
    p, li
      font-size: 0.95rem
</style>
