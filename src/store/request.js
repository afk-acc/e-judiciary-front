import axios from "../axios/index.js";
import {toast} from "vue3-toastify";
import t from '../main.js'

export default {
    state() {
        return {
            request_list: []
        }
    },
    getters: {
        get_request_list(state) {
            return state.request_list
        },
    },
    mutations: {
        update_request_list(state, data) {
            state.request_list = data
        }
    },
    actions: {
        send_request_lawyer(context) {
            axios.post('requests', {
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                toast.success(t('Ваша заявка стать юристом отправлена'), {autoClose: 2000})
            }).catch(res => {
                toast.error(t('Вы уже отправили заявку'), {autoClose: 2000})
            })
        },
        load_request_list(context, params) {
            axios.get(`requests?query=${params.query}&page=${params.page}&limit=${params.limit}&locale=${localStorage.getItem('locale')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_request_list', res.data)
            })
        },
        change_request_lawyer(context, params) {
            axios.post('requests/change', {
                user_id: params.user_id,
                value: Number(params.value),
                locale:localStorage.getItem('locale')
            },{
                headers:{
                    Authorization:`Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                if (Number(params.value) === 1)
                    toast.success(t('Вы приняли заявку пользователя'), {autoClose:2000})
                else toast.error(t('Вы не приняли заявку пользователя'), {autoClose:2000})
                context.dispatch('load_request_list', {page:1, limit:15, query:''})
            })
        }
    }
}