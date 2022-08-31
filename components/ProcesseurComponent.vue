<template>
  <div :id="'collapse' + cat" class="accordion-collapse collapse" :aria-labelledby="'heading' + cat"
    data-bs-parent="#accordionExample">
    <div class="accordion-body py-4 px-2">
      <div class="overflow-x-auto relative">
        <button v-if="loading" disabled type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center">
          <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor" />
          </svg>
          Loading...
        </button>
        <table v-if="loading === false" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-white uppercase bg-gray-500 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class=""></th>
              <th class="text-center">Prix</th>
              <th class="text-center">Puissance</th>
              <th class="text-center">Socket</th>
              <th class="text-center"></th>
            </tr>
          </thead>
          <tbody v-for="produit in produits" :key="produit.id">
            <tr class="bg-white border-b text-xs text-center dark:bg-gray-800 dark:border-gray-700">
              <th scope="row" class="py-1 px-1  text-gray-900 dark:text-white">
                {{ produit.name }}<img v-if="produit.img != ''" :src="require(`~/assets/images/${produit.img}`)" alt=""
                  class="object-fill mx-auto w-16 hover:w-48" />
              </th>
              <td class="py-1 px-2 text-lg bg-gray-200 font-bold">{{ produit.price }}€</td>
              <td class="py-1 px-2 ">{{ produit.puissance / 10 }} Ghz</td>
              <td class="py-1 bg-gray-200 px-2">
                {{ produit.socket }}
              </td>
              <td class="py-1 px-2">
                <a :href="produit.url" target="blank"><button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-xl py-2 my-2 px-1 rounded">
                    🔎
                  </button></a>
                <button class="bg-green-700 hover:bg-blue-700 text-white font-bold text-xl py-2 my-2 px-1 rounded"
                  @click="ajoutPanier(produit)">
                  🛒
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProcesseurComponent",
  // eslint-disable-next-line vue/require-prop-types
  props: ["cat"],

  data() {
    return {
      panier: [],
      boitier: 0,
      loading: false,
      y: 0,
      produits: [],
    };
  },
  methods: {
    async fetch(panierId) {
      this.loading = true;
      this.produits = await this.$axios.$get(`produits/processeurs/`);
      const panier = await this.$axios.$get("produits/panier/" + panierId + "/")
      if (panier.carteMere !== null) {
        this.produits = await this.produits.filter(
          (produit) => produit.socket === panier.carteMere_detail.socket
        );
      }
      this.loading = false;
      return this.produits;
    },
    ajoutPanier(produit) {
      this.boitier = { processeur: produit.id };
      this.alimChoisi = 0;
      this.$emit("ajout", {
        x: this.boitier,
        y: this.alimChoisi,
      });
    },
  },
};
</script>
