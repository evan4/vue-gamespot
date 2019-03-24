import Vue from 'vue';

const FbAuth = "https://www.googleapis.com/identitytoolkit/v3/relyingparty",
    FbApiKey = "AIzaSyDNVIktvueMPwZcfSnaGc-TVVkp7M2xMz0";


const admin = {
    namespaced: true,
    state: {
        email: '',
        token: '',
        refresh: '',
        users: null
    },
    getters: {

    },
    mutations: {
        auth(state, authData) {
            state.email = authData.email;
            state.token = authData.idToken;
            state.refresh = authData.refreshToken
        },
    },
    actions: {
        singin({ commit }, payload) {
            Vue.http.post(`${FbAuth}/verifyPassword?key=${FbApiKey}`, {
                    ...payload,
                    returnSecureToken: true
                })
                .then(response => response.json())
                .then(authData => {
                    commit("auth", authData)

                    localStorage.setItem('token', authData.idToken);
                    localStorage.setItem('refresh', authData.refreshToken);

                    console.log(authData);
                })
                .catch(error => {
                    console.log(error);
                })
        },
    }
};

export default admin;