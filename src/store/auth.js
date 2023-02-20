import q from "axios"
import {toast} from "vue3-toastify";
import t from "../main";
export default {
    state() {
        return {
            current_user: {},
            is_auth: ''
        }
    },
    getters: {
        getCurrentUser(state) {
            return state.current_user;
        },
        getIsAuth(state) {
            return state.is_auth;
        }
    },
    mutations: {
        updateCurrentUser(state, data) {
            state.current_user = data;
        },
        updateIsAuth(state, data) {
            state.is_auth = data;
        }
    },
    actions: {
         loadCurrentUser(context) {
             q.post(`${context.getters.get_base_url}api/v1/current-user`, {
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('updateCurrentUser', res.data.data)
                context.commit('updateIsAuth', true)
            }).catch(res=>{
                context.commit('updateIsAuth', false)
                localStorage.removeItem('token')
                // window.location = 'http://localhost:5173'
            })
        },
        authorize(context, param) {
            q.post(`${context.getters.get_base_url}api/v1/auth/login`, {
                login: param.login,
                password: param.password,
                locale: localStorage.getItem('locale')
            }).then(res => {
                localStorage.setItem('token', res.data.access_token);
                context.commit('updateIsAuth', true)
                toast.success( t('Успешная авторизация'), {autoClose:1500})
            }).catch(e => {
                localStorage.removeItem('token');
                context.commit('updateIsAuth', false);
                let mes = e.response.data.errors;
                for(let i in mes){
                    mes[i].forEach(el=>{
                        toast.error(el, {autoClose:3000})
                    })
                }
            })
        },


    }
}