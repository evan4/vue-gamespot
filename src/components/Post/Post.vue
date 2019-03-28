<template>
    <div class="post_container" v-if="post">
        <div class="post_header">
            <h1>{{post.title}}</h1>
            <div v-if="post.img"
            class="post_img" 
                :style="{'background-image': `url(${post.img})`}"></div>
            <img v-if="!post.img" 
                class="post_noimg"
                        :src="require('../../assets/images/featured/1.jpg')" 
                        :alt="post.title">
        </div>
        <div class="post_content">
            <div v-html="post.content"></div>
        </div>
        <div class="post_rating">
            <div>Ratiig: <span>{{post.rating}}</span> / 5</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    created(){
        let id = this.$route.params.id;
        this.$store.dispatch('posts/getPost', id);
    },
    computed: {
        ...mapGetters('posts', ['post'])
    },
    destroyed(){
        this.$store.commit('posts/clearPost');
    }
}
</script>

<style>

</style>
