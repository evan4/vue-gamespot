<template>
    <div>Dashboard</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters('admin', ['isAuth'])
    }
}
</script>

<style>

</style>
