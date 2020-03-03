import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: 'TCAF00993160', name: 'Allan de Albuquerque Ferreira' },
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ],
    events: [
      { id: 1, title: '...', organizer: '...' },
      { id: 2, title: '...', organizer: '...' },
      { id: 3, title: '...', organizer: '...' },
      { id: 4, title: 'QUATRO', organizer: 'EU' }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getEventById: state => {
      return id => {
        return state.events.find(event => {
          return event.id === id;
        });
      };
    }
  }
});
