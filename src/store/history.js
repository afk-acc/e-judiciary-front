import axios from '../axios'
import query from 'axios'
export default {
  state() {
    return {
      history_lists: {}
    }
  },
  getters: {
    getCurrentHistory(state) {
      return state.history_lists
    }
  },
  mutations: {
    updateHistoryLists(state, data) {
     state.history_lists = data 
    }
  },
  actions: {
    loadHistoryLists(context, params) {
      query.get( `${context.getters.get_base_url}api/v1/logs?page=${params.page}&limit=${params.limit}&locale=${params.locale}&query=${params.query}&sort=${params.sort}&date=${params.date}&category=${params.category}`, {
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(res=>{
        context.commit('updateHistoryLists', res.data)

      })
    }
  }
}