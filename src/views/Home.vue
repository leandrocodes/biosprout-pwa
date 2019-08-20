<template>
    <div class="home">
        <button @click="logout">Logout</button>
        <Predict msg="Welcome to Your Vue.js App" />
    </div>
</template>

<script>
import firebase from "firebase"
import Predict from "@/components/Predict.vue"

export default {
    name: "home",
    components: {
        Predict
    },
    methods: {
        logout: function() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.replace("login");
                })
        }
    }
}
</script>
