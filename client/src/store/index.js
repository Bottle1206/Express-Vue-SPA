import Vue from 'vue'
import Vuex from 'vuex'
import ah from '../util/request.js';
import api from '../util/api.js';

Vue.use(Vuex);

Vue.config.devtools = true;

export default new Vuex.Store({
  state: {
    expressInfo: ''
  },
  actions: {
    query ({ commit, state }, payload) {
      ah.normalAjaxPost('/getExpressData', {}, function (state, res) {
        if (state === 1 && res.httpCode === 200) {
          commit('updateState', {
            expressInfo: res.data.title
          })
        }
      })
    }
  },
  mutations: {
    updateState (state, payload) {
      state = Object.assign(state, payload)
    }
  },
  modules: {
    
  }
})