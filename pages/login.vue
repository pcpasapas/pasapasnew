<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="login-page">
        <v-layout flex align-center justify-center>
            <v-flex class="mx-auto" elevation-6>
                <v-card>
                    <v-card-title flex text-center align-center justify-center>
                        <v-btn rounded block icon to="/register" class="login-btn mx-auto">
                            <v-icon>mdi-account-circle</v-icon>
                            <p class="text-right">Créer un compte</p>
                        </v-btn>
                        <h1 >Se connecter</h1>
                    </v-card-title>

                    <v-card-text class="pt-4">
                        <div>
                            <v-form ref="form">
                                <v-text-field v-model="userData.email" label="Votre adresse mail" counter required>
                                </v-text-field>
                                <v-text-field v-model="userData.password" label="Votre mot de passe" :append-icon="
                                    userData.showPassword ? 'mdi-eye-off' : 'mdi-eye'
                                " :type="userData.showPassword ? 'text' : 'password'" required
                                    @click:append="userData.showPassword = !userData.showPassword"></v-text-field>
                                <v-layout justify-space-between>
                                    <v-btn @click="logInUser(userData)">
                                        Se connecter
                                    </v-btn>
                                    <v-btn href="/">
                                        Retour au site
                                    </v-btn>
                                    <a href="?">Mot de passe oublié</a>
                                </v-layout>
                            </v-form>
                        </div>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
export default {
    data: () => ({
        userData: { email: '', password: '', showPassword: false },
    }),
    methods: {
        async logInUser(userData) {
            try {
                await this.$auth.loginWith('local', {
                    data: userData,
                })
            } catch (error) {
            }
        },
    },
}
</script>