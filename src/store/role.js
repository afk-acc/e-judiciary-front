import axios from "../axios/index.js";
import {toast} from "vue3-toastify";
import t from '../main.js'
export default {
    state() {
        return {
            roles: [],
            permissions: []
        };
    },
    getters: {
        get_roles(state) {
            return state.roles
        },
        get_permissions(state) {
            return state.permissions
        }
    },
    mutations: {
        update_roles(state, data) {
            state.roles = data
        },
        update_permissions(state, data) {
            state.permissions = data
        }

    },
    actions: {
        load_roles(context) {
            axios.get(`role?locale=${localStorage.getItem('locale')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_roles', res.data.data)
            })
        },
        load_permission(context, id) {
            axios.get(`permission/${id}?locale=${localStorage.getItem('locale')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res => {
                context.commit('update_permissions', res.data.data)
            })
        },
        update_permission(context, params) {
            axios.post('permission', {
                role_id: params.role_id,
                permissions: params.permissions,
                locale: localStorage.getItem('locale')
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res=>{
                    toast.success(t('Вы успешно изменили разрешения'))
            })
        },
        del_role(context, params){
            axios.delete(`role/${params.role_id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res=>{
                toast.success(t('Вы успешно удалили роль'))

                context.dispatch('load_roles');
            })
        },
        add_role(context, params){
            axios.put('role', {
                locale:localStorage.getItem('locale'),
                name_uz_l:params.name_uz_l,
                name_uz_c:params.name_uz_c,
                name_ru:params.name_ru,
            }).then(res=>{
                toast.success(t('Вы успешно добавили роль'))
                context.dispatch('load_roles')
            }).catch(e=>{
                let mes = e.response.data.errors;
                for(let i in mes){
                    mes[i].forEach(el=>{
                        toast.error(el, {autoClose:2000})
                    })
                }
            })
        }
    }
}