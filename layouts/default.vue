<template>
  <div>
    <v-app>
    <NavbarComponent />
    <Nuxt />
    <v-expansion-panels>
        <v-expansion-panel>
            <v-expansion-panel-header>
                <h6>Mentions Légales et traitement des données personnelles</h6>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <h6>PCpasapas, micro-entreprise</h6>
                <h6>Créateur, EILDE Corentin</h6>
                <h6>20 avenue des Girondins</h6>
                <h6>29000 QUIMPER</h6>
                <h6>pcpasapas@gmail.com</h6>
            </v-expansion-panel-content>
        </v-expansion-panel>
    </v-expansion-panels>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style>
    h6 {
        font-size: 9px;
    }
</style>


