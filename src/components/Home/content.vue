<template>
    <div class="container">
        <div class="home_container">
            <md-card v-for="(post, index) in posts" :key="index">
                <md-card-media md-ratio="16:9">
                    <img v-if="post.img"
                    :src="post.img" 
                        :alt="post.game">
                    <img v-if="!post.img"
                        :src="require('../../assets/images/featured/1.jpg')" 
                        :alt="post.title">
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
                    :linkTo="`/post/${post.id}`"
                    >See review</app-button>
                </md-card-actions>
            </md-card>
        </div>
        <div class="load_more">
            <app-button
                type="btn"
                :action="loadMore"
                :class="['small_link']"
                >Load more</app-button>
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
    methods: {
        loadMore(){
            this.$store.dispatch('posts/getAllPosts', {
                limit: this.posts.length + 3
            })
        }
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
