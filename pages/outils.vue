<!-- eslint-disable vue/multi-word-component-names -->
<template lang="vue">
    <div>
        <NavbarComponent />
        <div id="titre">Les outils pour vous aider à développer votre site web</div>
        <ul>
            <li v-for="outil in outils">
                <a :href="outil.url" target="blank">{{ outil.title }}</a>
            </li>
        </ul>
        
    </div>
</template>

<script>
export default {
    async asyncData({ $axios }) {
        // eslint-disable-next-line no-unused-vars
        const outils = await $axios.$get(`outils/outils/`, {
        })
        return ({ outils })
    },
}
</script>

<style>

#titre {
    text-align: center;
    font-size: xx-large;
}
</style>