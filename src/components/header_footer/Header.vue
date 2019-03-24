<template>
    <header>
        <div class="container header_container">
            <div class="logo">
                <router-link to="/">gamespot</router-link>
            </div>
            <div class="login">
                <router-link to="/singin">
                    <img :src="require('../../assets/images/login.png')" alt="logo">
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style>

</style>
