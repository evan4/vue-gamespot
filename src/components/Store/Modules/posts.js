import Vue from 'vue';
import router from '../../../routes';

const posts = {
    namespaced: true,
    state: {
        post: null,
        posts: null
    },
    getters: {
        posts(state){
            return state.posts;
        },
        post(state){
            return state.post;
        },
    },
    mutations: {
        getAllPosts(state, payload){
            state.posts = payload;
        },
        getPost(state, payload){
            state.post = payload;
        },
        clearPost(state, payload){
            state.post = null;
        },
    },
    actions: {
        getAllPosts({commit}, payload){
            Vue.http.get(`posts.json?orderBy="$key"&limitToLast=${payload.limit}`)
                .then(response => response.json())
                .then(response => {
                    const posts = [];
                    for (const key in response) {
                        if (response.hasOwnProperty(key)) {
                            posts.push({
                                ...response[key],
                                id: key
                            })
                        }
                    }
                    commit('getAllPosts', posts.reverse());
                })
                .catch(error => {
                console.log(error);
                })
        },
        getPost({commit}, payload){
            Vue.http.get(`posts.json?orderBy="$key"&equalTo="${payload}"`)
                .then(response => response.json())
                .then(response => {
                    let post = {};
                    for (const key in response) {
                        if (response.hasOwnProperty(key)) {
                            post = {
                                ...response[key]
                            }
                        }
                    }
                    
                    commit('getPost', post);
                })
                .catch(error => {
                console.log(error);
                })
        },
    }
};

export default posts;