<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <NuxtLink to="/tutosfront/tutosfront">Retour à la liste des tutos </NuxtLink>

        <h1 class="text-xl text-center">{{tutos[tutoSel-1].title}}</h1>
        <!-- Prerequis -->
        <p v-if="tutos[tutoSel - 1].pre[0]!=''" class="underline">Prérequis :</p>
        <p v-else>Test</p>
        <ul>
            <li v-for="tutoSelect in tutos[tutoSel-1].pre" :key="tutoSelect.id">
                <p v-if="tutos[tutoSelect-1] != null">
                    <NuxtLink id="nuxt2" :to="{ name: 'tutosfront-tutofront', params: { tutofront: tutoSelect } } ">👉
                        {{
                        tutos[tutoSelect-1].title
                        }}
                    </NuxtLink>
                </p>
            </li>
        </ul>
        <!-- Instructions -->
        <div class="container">
        <p class="underline mt-10">Instructions :</p>
        <img v-if="tutos[tutoSel - 1].img != ''" :src="require(`~/assets/images/${tutos[tutoSel - 1].img}`)" alt=""
            class="object-fill mx-auto w-full" />
        <p class="italic">{{ tutos[tutoSel - 1].text}}</p>
            <v-textarea v-if="tutos[tutoSel - 1].code != 0.0" v-model="tutos[tutoSel-1].code"
                background-color="grey lighten-2" auto-grow filled outlined label="Code"
                readonly="readonly" class="my-0">
            </v-textarea>
        <div v-if="tutos[tutoSel - 1].resultathtml != ''">
            <p class="text-center">Voici le resultat sur votre navigateur</p>
            <img :src="require(`~/assets/images/${tutos[tutoSel - 1].resultathtml}`)" alt=""
                class="object-fill mx-auto w-full" />
            <p v-if="tutos[tutoSel - 1].resultattext !=''">{{ tutos[tutoSel - 1].resultattext}}</p>
        </div>
        </div>
        <div class="container">
        <ul v-if="tutos[tutoSel-1].sousSujet != null">
            <li v-for="tutoSelection in (tutos[tutoSel-1].sousSujet)" :key="tutoSelection.id" class="text-center mb-10">
                <p class="text-center text-xl">{{ tutos[tutoSelection-1].title }}</p>
                <img v-if="tutos[tutoSelection - 1].img != ''"
                    :src="require(`~/assets/images/${tutos[tutoSelection - 1].img}`)" alt=""
                    class="object-fill mx-auto w-full" />
                <p v-if="tutos[tutoSelection - 1].text != ''" class="italic">{{ tutos[tutoSelection - 1].text}}
                </p>
                <v-textarea v-if="tutos[tutoSelection - 1].code != 0.0" v-model="tutos[tutoSelection-1].code"
                background-color="grey lighten-2" auto-grow filled outlined label="Code"
                readonly="readonly" class="my-0">
                </v-textarea>
                <div v-if="tutos[tutoSelection - 1].resultathtml != ''" class="container">
                    <p>Voici le resultat sur votre navigateur</p>
                    <img :src="require(`~/assets/images/${tutos[tutoSelection - 1].resultathtml}`)" alt=""
                        class="object-fill mx-auto w-full" />
                    <p v-if="tutos[tutoSelection - 1].resultattext !=''">{{ tutos[tutoSelection - 1].resultattext}}
                    </p>
                </div>
            </li>
        </ul>
        </div>

        <p class="underline">Que faire ensuite ? :</p>
        <ul v-if="tutos[tutoSel-1].apres != null">
            <li v-for="tutoSelectionne in (tutos[tutoSel-1].apres)" :key="tutoSelectionne.id">
                <NuxtLink id="nuxt2" :to="{ name: 'tutosfront-tutofront', params: { tutofront: tutoSelectionne } } ">
                    👉 {{
                    tutos[tutoSelectionne-1].title }}
                </NuxtLink>
            </li>
        </ul>
    </div>


</template>

<script>


export default {
    name: "TutoName",
    // eslint-disable-next-line vue/require-prop-types
    props: ["tuto"],
    async asyncData({ $axios, $route, params, tuto }) {
        // eslint-disable-next-line no-unused-vars
        const tutos = await $axios.$get(`tutos/tutoriels/`, {
        })
        return ({ tutos })
    },
    // eslint-disable-next-line vue/require-prop-types
    data() {
        return {
            tutoSel:this.$route.params.tutofront
        }
    },



}
</script>

<style>

#nuxt2 {
    margin: 10px;
    background-color: beige;
}

#nuxt2:hover {
    background-color:aqua;
    color: white;
    font-size: larger;


}
</style>


