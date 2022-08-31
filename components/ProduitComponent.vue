<!-- eslint-disable vue/no-unused-components -->
<template>
  <div>
    <div class="accordion-item bg-white border border-gray-200">
      <h2 :id="'heading' + cat" class="accordion-header mb-0">
        <button
          class="accordion-button relative flex uppercase items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="'#collapse' + cat"
          aria-expanded="false"
          :aria-controls="'collapse' + cat"
          @click="refs(cat)"
        >
          {{ cat_texte }}
        </button>
      </h2>
      <BoitierComponent
        v-if="cat === 'Boitiers'"
        ref="boitierComponent"
        :cat="cat"
        @ajout="ajoutPanier($event)"
      >
      </BoitierComponent>
      <AlimentationComponent
        v-if="cat === 'Alimentations'"
        :cat="cat"
        @ajout="ajoutPanier($event)"
      >
      </AlimentationComponent>
      <ProcesseurComponent
        v-if="cat === 'Processeurs'"
        ref="processeurComponent"
        :cat="cat"
        @ajout="ajoutPanier($event)"
      >
      </ProcesseurComponent>
      <CarteMereComponent
        v-if="cat === 'Cartes'"
        ref="carteMereComponent"
        :cat="cat"
        @ajout="ajoutPanier($event)"
      >
      </CarteMereComponent>
      <CarteGraphiqueComponent
        v-if="cat === 'CartesGraphiques'"
        ref="carteGraphiqueComponent"
        :cat="cat"
        @ajout="ajoutPanier($event)"
      >
      </CarteGraphiqueComponent>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProduitComponent",
  // eslint-disable-next-line vue/require-prop-types, vue/prop-name-casing
  props: ["categorie", "cat_texte", "panierId"],

  data() {
    return {
      cat: this.categorie,
      panier: [],
      boitier: 0,
      produits: {},
      loading: false,
      y: 0,
    };
  },
  mounted() {},
  methods: {
    async refs(cat) {
      //   this.$emit("categorie", cat);
      if (cat === "Boitiers") {
        await this.$refs.boitierComponent.fetch(this.panierId);
      }
      if (cat === "Cartes") {
        await this.$refs.carteMereComponent.fetch(this.panierId);
      }
      if (cat === "Processeurs") {
        await this.$refs.processeurComponent.fetch(this.panierId);
      }
      if (cat === "CartesGraphiques") {
        await this.$refs.carteGraphiqueComponent.fetch(this.panierId);
      }
    },
    async ajoutPanier($event) {
      this.boitier = $event.x;
      this.alimChoisi = $event.y;
      try {
        this.panier = await this.$axios.$put("produits/panier/" + this.panierId + "/", this.boitier)
        this.panier = await this.$axios.$get("produits/panier/" + this.panierId + "/")
        this.$emit("prod", {
          x: this.panier,
          y: this.alimChoisi,
        });
      } catch (e) {
        return { recipes: [] };
      }
    },
  },
};
</script>
