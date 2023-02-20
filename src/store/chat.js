import axios from "../axios/index.js";

export default {
    state(){
        return{
            chat_user_list:[],
            messages:[],
        }
    },
    getters:{
        get_chat_user_list(state){
            return state.chat_user_list
        },
        get_messages(state){
            return state.messages
        }
    },
    mutations:{
        update_chat_user_list(state,data){
            state.chat_user_list = data
        },
        update_messages(state, data){
            state.messages = data
        },
        update_messages_recive(state,data){
            state.messages.data.push(data.message)
        },
        add_messages(state,data){
            state.messages.data = [ ...data.data, ...state.messages.data]
            console.log(state.messages.data)
            state.messages.meta = data.meta
        }

    },
    actions:{
        load_chat_user_list(context, params){
            axios.get(`chat/rooms?locale=${localStorage.getItem('locale')}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res=>{
                context.commit('update_chat_user_list', res.data.data)
            })
        },
        load_messages(context, params){
            axios.get(`chat/room/${params.room_id}/messages?page=${params.page}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res=>{
                if(params.page === 1)
                  context.commit('update_messages', res.data)
                else{
                    context.commit('add_messages', res.data)
                }
            })
        },
        recive_message(context, message){
            context.commit('update_messages_recive', message)
        },
        send_message(context,params){
            axios.post(`chat/room/${params.chat_id}/message`, params.message, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res=>{

            })
        },
        read_message(context, params){
            axios.post(`chat/room/${params.chat_id}/read`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }).then(res=>{
                context.dispatch('load_chat_user_list', {})
            })
        }
    },
}