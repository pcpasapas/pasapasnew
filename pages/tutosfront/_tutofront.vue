<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <NavbarComponent />
        <NuxtLink to="/tutosfront/tutosfront">Retour à la liste des tutos </NuxtLink>
        <h1 class="text-xl text-center">{{tutos[tutoSel-1].title}}</h1>
        <p class="underline">Prérequis :</p>
        <ul v-if="tutos[tutoSel - 1].pre!= null">
            <li v-for="tutoSelect in tutos[tutoSel-1].pre" :key="tutoSelect.id">
                <p v-if="tutos[tutoSelect-1] != null">
                    <NuxtLink id="nuxt2" :to="{ name: 'tutosfront-tutofront', params: { tutofront: tutoSelect } } ">👉 {{
                        tutos[tutoSelect-1].title
                        }}
                    </NuxtLink>
                </p>
            </li>
        </ul>
        <p class="underline">Instructions :</p>
        <img v-if="tutos[tutoSel - 1].img != ''" :src="require(`~/assets/images/${tutos[tutoSel - 1].img}`)" alt=""
            class="object-fill mx-auto w-full" />

        <p v-if="tutos[tutoSel - 1].code != 0.0"
            class="container border-solid border-2 bg-gray-200 text-center mx-auto border-gray-500"> {{
            tutos[tutoSel-1].code }}
        </p>
        <p>{{ tutos[tutoSel - 1].text}}
        </p>
        <div v-if="tutos[tutoSel - 1].resultathtml != ''" class="container">
            <p>Voici le resultat sur votre navigateur</p>
            <img :src="require(`~/assets/images/${tutos[tutoSel - 1].resultathtml}`)" alt=""
                class="object-fill mx-auto w-full" />
            <p v-if="tutos[tutoSel - 1].resultattext !=''">{{ tutos[tutoSel - 1].resultattext}}</p>
        </div>

        <ul v-if="tutos[tutoSel-1].sousSujet != null">
            <li v-for="tutoSelection in (tutos[tutoSel-1].sousSujet)" :key="tutoSelection.id">
                {{ tutos[tutoSelection-1].title }}
                <img v-if="tutos[tutoSelection - 1].img != ''"
                    :src="require(`~/assets/images/${tutos[tutoSelection - 1].img}`)" alt=""
                    class="object-fill mx-auto w-full" />
                <p v-if="tutos[tutoSelection - 1].code != 0.0"
                    class="container border-solid border-2 bg-gray-200 text-center mx-auto border-gray-500"> {{
                    tutos[tutoSelection-1].code }}
                </p>
                <div v-if="tutos[tutoSelection - 1].resultathtml != ''" class="container">
                    <p>Voici le resultat sur votre navigateur</p>
                    <img :src="require(`~/assets/images/${tutos[tutoSelection - 1].resultathtml}`)" alt=""
                        class="object-fill mx-auto w-full" />
                    <p v-if="tutos[tutoSelection - 1].resultattext !=''">{{ tutos[tutoSelection - 1].resultattext}}
                    </p>
                </div>
                <p v-if="tutos[tutoSelection - 1].resultattext !=''"></p>
            </li>
        </ul>

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


