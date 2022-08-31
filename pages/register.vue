<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="register-page">
        <v-container>
            <v-layout flex align-center justify-center>
                <v-flex class="mx-auto" elevation-6>
                    <v-card>
                        <v-card-title flex align-center justify-center>
                            <h1>Créer un compte</h1>
                        </v-card-title>
                        <v-card-text class="pt-4">
                            <div>
                                <v-form ref="form">
                                    <v-text-field v-model="userData.first_name" label="Votre prénom" counter required>
                                    </v-text-field>
                                    <v-text-field v-model="userData.email" label="Votre adresse mail" counter required>
                                    </v-text-field>
                                    <v-text-field v-model="userData.password" label="Votre mot de passe" required
                                        autocomplete="new-password" :append-icon="
                                            userData.showPassword ? 'mdi-eye' : 'mdi-eye-off'
                                        " :type="userData.showPassword ? 'text' : 'password'" @click:append="
    userData.showPassword = !userData.showPassword
"></v-text-field>
                                    <v-text-field v-model="userData.password2" label="Confirmer votre mot de passe"
                                        autocomplete="new-password" :append-icon="
                                        userData.showPassword2 ? 'mdi-eye' : 'mdi-eye-off'
                                    " :type="userData.showPassword2 ? 'text' : 'password'" required @click:append="
    userData.showPassword2 = !userData.showPassword2
"></v-text-field>
                                    <v-layout justify-space-between>
                                        <v-btn @click="signUp(userData)">
                                            Créer votre compte
                                        </v-btn>
                                        <a href="">Mot de passe oublié</a>
                                    </v-layout>
                                    <v-btn href="/">
                                        Retour au site
                                    </v-btn>
                                </v-form>
                            </div>
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => ({
        userData: {
            email: '',
            password: '',
            password2: '',
            first_name: '',
            showPassword: false,
            showPassword2: false,
        },
    }),
    methods: {
        async signUp(registrationInfo) {
            await this.$axios
                .$post('accounts/users/', registrationInfo)
                .then((response) => {
                })
                .catch(() => {
                })
            this.$auth.loginWith('local', {
                data: registrationInfo,
            })
        },
    },
}
</script>