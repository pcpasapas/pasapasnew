<template>

    <nav class="bg-blue-400 border-gray-200 justify-between mx-0 px-0 sm:px-0 py-2.5 rounded dark:bg-gray-900">
        <div class="flex items-center justify-between mx-auto p-0">
            <NuxtLink class="text-xl mx-auto text-center font-semibold" to="/"><img :src="require(`~/assets/images/logo.jpg`)" alt="logo"
                    class="object-fill mx-auto w-16" /></NuxtLink>

            <div class="authentication-buttons px-0 mx-1 justify-right">
                <div v-if="$auth.loggedIn" class="justify-right">
                    <p class="capitalize text-center">{{ $auth.user.first_name }}
                        <v-btn outlined to="" class="">
                            <v-icon>mdi-cart</v-icon>
                        </v-btn>
                    </p>
                    <v-btn class="text-xs" plain x-small to="/" @click="$auth.logout()">
                        <v-icon>mdi-logout</v-icon>
                        <p class="text-right text-[8px]">Déconnexion</p>
                    </v-btn>
                </div>
                <div v-else>
                    <p class="text-xs">Merci de vous connecter pour sauvegarder votre panier</p>
                    <v-btn rounded block icon to="/login" class="login-btn mx-auto">
                        <v-icon>mdi-account-circle</v-icon>
                        <p class="text-right">Connexion</p>
                    </v-btn>
                </div>
            </div>

        </div>
        <div class="mx-auto p-1">
            <ul class=" grid gap-1 grid-cols-4 md:grid-cols-5">
                <li>
                    <NuxtLink id="nuxt" to="/"
                        class="inline-flex w-full mb-0 py-1 text-xs md:text-xl rounded-lg border border-gray-200">
                        Accueil
                    </NuxtLink>
                </li>
                <!-- <li class="">
                    <NuxtLink id="nuxt" to="/produits"
                        class="inline-flex mx-auto w-full text-xs md:text-xl py-1 rounded-lg border border-gray-200">
                        PC sur mesure
                    </NuxtLink>
                </li> -->
                <li>
                    <NuxtLink id="nuxt" to="/tutosfront/tutosfront"
                        class="inline-flex w-full py-1 text-xs md:text-xl rounded-lg border border-gray-200">
                        Tutoriels
                    </NuxtLink>
                </li>
                <li>
                    <NuxtLink id="nuxt" to="/outils"
                        class="inline-flex w-full py-1 text-xs md:text-xl rounded-lg border border-gray-200">
                        Outils
                    </NuxtLink>
                </li>
            </ul>
        </div>
    </nav>

</template>

<script>
export default {
    name: 'NavbarComponent',
}
</script>

<style scoped>
#nuxt {
    justify-content: center;
    background-color: rgb(143, 202, 241);
    color: white;
}
#nuxt.nuxt-link-exact-active {
    color: rgb(105, 103, 103);
    background-color: red;
} 
.v-tab {
    font-size: 8px;
    max-width: 100%;
}

.test {
    font-size: 8px;
    color: blue;
}

@media handheld, screen and (min-client-width: 1024px) {
    .v-tab {
        font-size: 12px;
    }
    .test {
        font-size: 15px;
        color: red;
    }
}
</style>
