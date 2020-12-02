import Vue from 'nativescript-vue';
import Vuex from 'vuex';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: new ObservableArray([])
  },
  mutations: {
    tambah (state, text) {
      state.list.push({
        text,
        done: false,
        id: Date.now()
      })
    },
    hapus (state, todo) {
      state.list = state.list.filter(item => item.id !== todo.id)
    },
    toggle (state, todo) {
      todo.done = !todo.done
    }
  },
  actions: {

  }
});
