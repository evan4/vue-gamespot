import Vue from 'vue';
import router from '../../../routes';

const FbAuth = "https://www.googleapis.com/identitytoolkit/v3/relyingparty",
    FbApiKey = "AIzaSyDNVIktvueMPwZcfSnaGc-TVVkp7M2xMz0";


const admin = {
    namespaced: true,
    state: {
        email: '',
        token: '',
        refresh: '',
        users: null,
        authFailed: false
    },
    getters: {
        isAuth(state){
            return state.token ? true : false;
        },
        authFailed(state){
            return state.authFailed;
        }
    },
    mutations: {
        authuser(state, authData) {
            state.email = authData.email;
            state.token = authData.idToken;
            state.refresh = authData.refreshToken

            if (authData.type === 'singin') {
                router.push('dashboard');
            }
        },
        authFailed(state, type){
            if (type === 'reset') {
                state.authFailed = false;
            }else{
                state.authFailed = true;
            }
        },
        logoutuser(state){
            state.email = '';
            state.token = '';
            state.refresh = '';
            localStorage.removeItem('email');
            localStorage.removeItem('token');
            localStorage.removeItem('refresh');
            router.push('/')
        }
    },
    actions: {
        singin({ commit }, payload) {
            Vue.http.post(`${FbAuth}/verifyPassword?key=${FbApiKey}`, {
                    ...payload,
                    returnSecureToken: true
                })
                .then(response => response.json())
                .then(authData => {
                    commit("authuser", {
                        ...authData,
                        type: 'singin'
                    })

                    localStorage.setItem('token', authData.idToken);
                    localStorage.setItem('refresh', authData.refreshToken);

                    console.log(authData);
                })
                .catch(error => {
                    commit('authFailed');
                })
        }
    }
};

export default admin;