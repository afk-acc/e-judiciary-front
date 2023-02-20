import axios from "../axios/index.js";

export default {
    state(){
        return{
            notifications:[],
        }
    },
    getters:{
        get_notifications(state){
            return state.notifications
        }
    },
    mutations:{
        update_notifications(state, data){
            state.notifications = data
        },
        add_notification(state, data){
            state.notifications.push(data)
        },
        remove_notification(state, data){
            state.notifications = state.notifications.filter(e=>{
                return e.id !== data
            })
        }
    },
    actions:{
        load_notifications(context){
            axios.get('notification', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res=>{
                context.commit('update_notifications', res.data.data)
            })
        },
        remove_notification(context, data) {
            axios.post('notification/read', {id:data}, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res=>{
                context.commit('remove_notification', data)
            })
        }
    }
}