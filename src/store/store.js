import Vue from "vue";

import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    currentForm: 1,
    formStep: [
      "雇用契約について",
      "入社手続きの登録をお願いいたします",
      "入社手続きの確認をお願いいたします",
      "入社手続きの申請ありがとうございました。",
      "入社手続きの申請をします"
    ],
    dataForm1: {

    },
    dataForm2: {
      birth: {

      }
    }
  },

  getters: {

  },

  mutations: {
    HANDLE_PREV(state) {
      if (state.currentForm > 1) {
        state.currentForm--
      }
    },
    UPDATE_PAGEACTIVE(state, payload) {
      if (state.currentForm < state.formStep.length) {
        state.currentForm += payload
      }
    },
    UPDATE_DATA1(state, payload) {
      state.dataForm1 = payload
    },
    UPDATE_DATA2(state, payload) {
      state.dataForm2 = payload
    },
    RESET_DATA(state) {
      state.currentForm = 1;
      state.dataForm2 = {}
      state.dataForm1 = {}
    }
  },
})