<template>
    <div class="container dashboard_container">
        <div class="admin_nav">
            <ul>
                <li>
                    <router-link to="/dashboard/add_posts">Add post</router-link>
                </li>
                <li>
                    <router-link to="/dashboard/posts_list">posts list</router-link>
                </li>
            </ul>
        </div>
        <router-view/>
    </div>
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
