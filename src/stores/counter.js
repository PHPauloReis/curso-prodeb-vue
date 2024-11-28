import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', {

  state: () => ({
    count: 12
  }),

  getters: {
    doubleCount(state) {
      return state.count * 2
    }
  },

  actions: {
    increments() {
      this.count++
    }
  }

})