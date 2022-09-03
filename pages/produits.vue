
<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<!-- eslint-disable no-unused-expressions -->
<template>
  <div class="p-1">
    <div v-if="
        panier.boitier != null ||
        panier.alimentation != null ||
        panier.processeur != null ||
        panier.carteMere != null ||
        panier.carteGraphique != null
      " class="border-solid border-2 flex flex-wrap p-2 m-2 border-blue-500 rounded">
      <table class="text-xs table-fixed text-gray-700 w-full bg-gray-50 dark:bg-gray-700 dark:text-gray-400 sm:w-4/5">
        <thead>
            <tr class="col-span-3 mx-auto text-xs text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              Votre panier :
            </tr>
        </thead>
        <tbody>
          <tr v-if="panier.boitier != null"
            class="text-xs  text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <td class="px-2 max-w-lg font-medium  text-gray-900  dark:text-white">
              {{ panier.boitier_detail.name }}
            </td>
            <td class="px-6 text-center">{{ panier.boitier_detail.price }} €</td>
            <td class="px-6">
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 my-2 px-1 rounded"
                @click="suppr('boitier')">
                Supprimer
              </button>
            </td>
          </tr>
            <tr v-if="panier.alimentation !=null"
               class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <td class="px-2 font-medium text-gray-900  dark:text-white">
                {{ panier.alimentation_detail.name }}
              </td>
              <td class="px-6 text-center">{{ panier.alimentation_detail.price }} €</td>
              <td class="px-6">
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 my-2 px-1 rounded"
                  @click="suppr('alimentation')">
                  Supprimer
                </button>
              </td>
            </tr>
          <tr v-if="panier.processeur != null"
            class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <td class="px-2 font-medium text-gray-900  dark:text-white">
              {{ panier.processeur_detail.name }}
            </td>
            <td class="px-6 text-center">{{ panier.processeur_detail.price }} €</td>
            <td class="px-6">
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 my-2 px-1 rounded"
                @click="suppr('processeur')">
                Supprimer
              </button>
            </td>
          </tr>
          <tr v-if="panier.carteMere != null"
            class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <td class="px-2 font-medium text-gray-900  dark:text-white">
              {{ panier.carteMere_detail.name }}
            </td>
            <td class="px-6 text-center">{{ panier.carteMere_detail.price }} €</td>
            <td class="px-6">
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 my-2 px-1 rounded"
                @click="suppr('carteMere')">
                Supprimer
              </button>
            </td>
          </tr>
          <tr v-if="panier.carteGraphique != null"
            class="text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <td class="px-2 font-medium text-gray-900 dark:text-white">
              {{ panier.carteGraphique_detail.name }}
            </td>
            <td class="px-6 text-center">{{ panier.carteGraphique_detail.price }} €</td>
            <td class="px-6">
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 my-2 px-1 rounded"
                @click="suppr('carteGraphique')">
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="w-1/5 my-auto mx-auto items-center contents sm:grid">
        <p class="mx-auto text-center my-auto">Total de votre panier:</p>
        <p class="mx-auto text-center my-auto">{{ total }} €</p>
        <p class="bg-blue-500 hover:bg-blue-700 rounded p-1 text-center mx-auto my-auto" @click="viderPanier()">
          Vider votre panier
        </p>
      </div>
    </div>
    <div id="accordionExample" class="accordion">
      <ul>
        <ProduitComponent v-if="panier.boitier == null" :categorie="'Boitiers'" :cat_texte="'Boitiers'"
          :panier-id="panierId" @prod="choisir($event)">
        </ProduitComponent>
        <ProduitComponent v-if="panier.alimentation == null && alimChoisi === 0" :categorie="'Alimentations'"
          :panier-id="panierId" :cat_texte="'Alimentations'" @prod="choisir($event)">
        </ProduitComponent>
        <ProduitComponent v-if="panier.processeur == null" :categorie="'Processeurs'" :cat_texte="'Processeurs'"
          :panier-id="panierId" @prod="choisir($event)">
        </ProduitComponent>
        <ProduitComponent v-if="panier.carteMere == null" :categorie="'Cartes'" :cat_texte="'Cartes Mères'"
          :panier-id="panierId" @prod="choisir($event)">
        </ProduitComponent>
        <ProduitComponent v-if="panier.carteGraphique == null" :categorie="'CartesGraphiques'" :panier-id="panierId"
          :cat_texte="'Cartes Graphiques'" @prod="choisir($event)">
        </ProduitComponent>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "ProduitName",
  async asyncData({ $axios, $auth }) {
    if ($auth.loggedIn) {
      // eslint-disable-next-line no-unused-vars
      const [panier, panierId] = await $axios.$get("produits/panier/", {
        params: { customUser: $auth.user.id }
      })
      return ({ panier, panierId: panier.id })
    }
    else {
      // eslint-disable-next-line no-unused-vars
      const [panier, panierId] = await $axios.$get("produits/panier/", {
        params: { customUser: 5 }
      })
      return ({ panier, panierId: panier.id })
    }

    
      
  },


  data() {
    return {
      produits: {},
      panier: {
        boitier: "",
        alimentation: "",
        processeur: "",
        carteMere: "",
        carteGraphique: "",
        customUser: "",
      },
      panierId: 0,
      total: 0,
      alimChoisi: 0,
      change: {},
      catshow: "",
    };
  },

  methods: {
    choisir($event) {
      this.panier = $event.x;
      this.alimChoisi = $event.y;
      if (this.panier.alimentation_detail == null) {
        // eslint-disable-next-line no-unused-expressions
        this.panier.alimentation_detail = { price: 0 };
      }
      if (this.panier.boitier_detail == null) {
        // eslint-disable-next-line no-unused-expressions

        this.panier.boitier_detail = { price: 0 };
      }
      if (this.panier.processeur_detail == null) {
        // eslint-disable-next-line no-unused-expressions

        this.panier.processeur_detail = { price: 0 };
      }
      if (this.panier.carteMere_detail == null) {
        // eslint-disable-next-line no-unused-expressions

        this.panier.carteMere_detail = { price: 0 };
      }
      if (this.panier.carteGraphique_detail == null) {
        // eslint-disable-next-line no-unused-expressions

        this.panier.carteGraphique_detail = { price: 0 };
      }
      this.total =
        this.panier.alimentation_detail.price +
        this.panier.boitier_detail.price +
        this.panier.processeur_detail.price +
        this.panier.carteMere_detail.price +
        this.panier.carteGraphique_detail.price;
    },
    async viderPanier() {
      try {
        this.panier = await this.$axios.$put("produits/panier/" + this.panierId + "/", {
          boitier: "",
          alimentation: "",
          processeur: "",
          carteMere: "",
          carteGraphique: "",
        });
        this.panier = await this.$axios.$get("produits/panier/" + this.panierId + "/")
        this.alimChoisi = 0;
      } catch (e) {
        return e;
      }
    },
    async suppr(composant) {
      if (composant === "boitier") {
        this.alimChoisi = 0;
        this.total = this.total - this.panier.boitier_detail.price;
        this.change = { boitier: "" };
      }
      if (composant === "alimentation") {
        this.alimChoisi = 0;
        this.total = this.total - this.panier.alimentation_detail.price;
        this.change = { alimentation: "" };
      }
      if (composant === "processeur") {
        this.total = this.total - this.panier.processeur_detail.price;
        this.change = { processeur: "" };
      }
      if (composant === "carteMere") {
        this.total = this.total - this.panier.carteMere_detail.price;
        this.change = { carteMere: "" };
      }
      if (composant === "carteGraphique") {
        this.total = this.total - this.panier.carteGraphique_detail.price;
        this.change = { carteGraphique: "" };
      }
      await this.$axios.$put("produits/panier/" + this.panierId + "/", this.change);
      this.panier = await this.$axios.$get("produits/panier/" + this.panierId + "/")
    },
  },
};
</script>
