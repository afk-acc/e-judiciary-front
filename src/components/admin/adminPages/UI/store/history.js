import axios from '../axios/index'

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
     state.history_lists = data;
    }
  },
  actions: {
    loadHistoryLists(context, params) {
      axios.get(`logs?page=${params.page}&limit=${params.limit}&locale=${params.locale}`, params).then(res=>{
        context.commit('updateHistoryLists', res.data)
      })
    }
  }
}