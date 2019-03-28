<template>
    <div>
        <md-table>
            <md-table-toolbar>
                <h1 class="md-title">Posts</h1>
            </md-table-toolbar>
            <md-table-row>
                <md-table-head>Title</md-table-head>
                <md-table-head>Description</md-table-head>
                <md-table-head md-numeric>Rating</md-table-head>
                <md-table-head>Action</md-table-head>
            </md-table-row>

            <md-table-row v-for="post in getAdminPosts" :key="post.id">
                <md-table-cell>{{post.title}}</md-table-cell>
                <md-table-cell>{{post.desc}}</md-table-cell>
                <md-table-cell md-numeric>{{post.rating}}</md-table-cell>
               <md-table-cell>
                   <div class="post_delete" @click="deletePost(post.id)">Delete</div>
               </md-table-cell>
            </md-table-row>

        </md-table>
        <md-dialog-confirm
            :md-active.sync="confirmDelete"
            md-title="Confirm post delete"
            md-content="Are you sure to delete this post?"
            md-confirm-text="Agree"
            md-cancel-text="Disagree"
            @md-cancel="onCancel"
            @md-confirm="onConfirm" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data(){
        return{
            confirmDelete: false,
            idDelete: null
        }
    },
    computed: {
        ...mapGetters('admin', ['getAdminPosts'])
    },
    created(){
         this.$store.dispatch('admin/getAdminPosts')
    },
    methods: {
        deletePost(id){
            this.confirmDelete = true;
            this.idDelete = id;
        },
        onConfirm () {
            this.confirmDelete = false;
            this.$store.dispatch('admin/deletePost', this.idDelete)
        },
        onCancel () {
            this.idDelete = null;
            this.confirmDelete = false;
        }
    }
}
</script>

<style>

</style>
