<template>
    <header>
        <div class="container header_container">
            <div class="logo">
                <router-link to="/">gamespot</router-link>
            </div>
            <div class="login" v-if="!isAuth">
                <router-link to="/singin">
                    <img :src="require('../../assets/images/login.png')" alt="logo">
                </router-link>
            </div>
            <div v-if="isAuth">
                <ul>
                    <li><span @click="logoutuser">Logout</span></li>
                    <li><router-link to="/dashboard">Dashboard</router-link></li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
     computed: {
        ...mapGetters('admin', ['isAuth'])
    },
    methods: {
        logoutuser(){
            this.$store.commit('admin/logoutuser');
        }
    }
}
</script>

<style>

</style>
