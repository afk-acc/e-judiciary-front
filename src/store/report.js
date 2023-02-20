import axios from "../axios/index.js";
import {toast} from "vue3-toastify";
import t from "../main.js";

export default {
    state() {
        return {
            sended: '',
            report_list: [],
        };
    },
    getters: {
        get_sended(state) {
            return state.sended
        },
        get_reports(state) {
            return state.report_list
        }
    },
    mutations: {
        update_sended(state, data) {
            state.sended = data
        },
        update_report_list(state, data) {
            state.report_list = data
        }
    },
    actions: {
        sendReport(context, params) {
            axios.post('report', params, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_sended', true)
                toast.success(t('Ваша жалоба успешно доставлена'), {autoClose:1500})

            }).catch(e => {
                context.commit('update_sended', false)
                let mes = e.response.data.errors;
                for(let i in mes){
                    mes[i].forEach(el=>{
                        toast.error(el, {autoClose:2000})
                    })
                }
            })
        },
        load_report(context, params) {
            if (params.type === 'unread')
                axios.get(`report/unread?query=${params.query}&page=${params.page}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(res => {
                    context.commit('update_report_list', res.data)
                })
            else if (params.type === 'delivered')
                axios.get(`report/delivered?query=${params.query}&page=${params.page}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(res => {
                    context.commit('update_report_list', res.data)
                })
            else axios.get(`report?query=${params.query}&page=${params.page}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }).then(res => {
                    context.commit('update_report_list', res.data)
                })
        },
        read_report(context, params) {
            axios.post(`report/${params}/read`, {}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {

            })
        },
        send_response_report(context, params) {
            axios.post(`report/${params.id}/send-message`,
                {data: params.data}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            ).then(res => {
                window.location.reload()
            })
        }
    },
}