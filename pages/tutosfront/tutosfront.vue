<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <NavbarComponent />
        <h1 class="text-center text-xl">Tous les minis tutos en vrac : </h1>
        <div class="containertutos">
            <ul>
                <li v-for="tuto in tutosFilters" :key="tuto.id">
                    <v-card elevation="35" outlined>
                        <v-list-item three-line>
                            <v-list-item-content>
                                <div class="text-overline mx-auto text-center">
                                    {{ tuto.title
                                    }}
                                </div>
                                <v-list-item-subtitle> <img v-if="tuto.img != ''"
                                        :src="require(`~/assets/images/${tuto.img}`)" alt=""
                                        class="object-fill mx-auto w-48 hover:w-full" /></v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>

                        <v-card-actions class="mx-auto">
                            <v-btn outlined rounded text mx-auto>
                                <NuxtLink v-if="tuto.actif != 0"
                                    :to="{ name: 'tutosfront-tutofront', params: { tutofront: tuto.id } } ">Voir le tuto
                                </NuxtLink>
                            </v-btn>
                        </v-card-actions>
                    </v-card>

                </li>
            </ul>
        </div>
    </div>


</template>

<script>

export default {
    name: "TutoName",
    async asyncData({ $axios, $auth }) {
        // eslint-disable-next-line no-unused-vars
        const tutos = await $axios.$get("tutos/tutoriels/", {
        })
        return ({ tutos })
    },
    computed: {
        tutosFilters() {
            return this.tutos.filter(function (tuto) {
                return tuto.actif !== false
            }) 
        },
    }
}    

    


</script>

<style scoped>




.containertutos {
    display: block;

}

li {
    width: 90%;
    margin: 10px;
}

ul {
    display: grid;
    grid-template-columns: 50% 50%;
    margin: auto;
    justify-content: center;

}
</style>

