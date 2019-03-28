<template>
    <div class="container">
        <div class="home_container">
            <md-card v-for="(post, index) in posts" :key="index">
                <md-card-media md-ratio="16:9">
                    <img :src="post.img" 
                        :alt="post.game">
                </md-card-media>
                <md-card-header>
                    <h2 class="md-title">{{post.title}}</h2>
                    <div class="md-subhead">
                        <div>{{post.desc}}</div>
                    </div>
                </md-card-header>
                <md-card-actions>
                    <app-button 
                    type="link"
                    :linkTo="`/posts/${post.id}`"
                    :class="['small_link']"
                    >See review</app-button>
                </md-card-actions>
            </md-card>
           
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            
        }
    },
    computed: {
        ...mapGetters('posts', ['posts'])
    },
    created(){
        this.$store.dispatch('posts/getAllPosts', {
            limit: 3
        })
    }
}
</script>

<style>

</style>
