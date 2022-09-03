<template>
  <div>
    <h1 class="text-center text-xl">Bienvenue sur notre site qui va vous aider à découvrir la crétion de sites internet ! </h1>
    <ul>
      <li class="mx-auto">
      <div class="container">
      <NuxtLink to ="tutosfront/tutosfront">Tutos Nuxt<img :src="require(`~/assets/images/logos/logonuxt.png`)" /></NuxtLink>
      </div>
      </li>
      <li>Tutos Html</li>
      <li>Tutos CSS</li>
    </ul>
    <h2>Modifié le 02/09 à 11h11</h2>
    <h2>Mise à jour auto</h2>
  </div>

</template>

<script>
export default {
    name: "IndexPage",

}
</script>

<style scoped>
h1 {
  color: blueviolet
}

.container {
  text-align: center;
}

a {
  text-align: center;
}

img {
  margin: auto;
}
</style>
