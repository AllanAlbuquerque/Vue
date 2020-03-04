import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService';

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
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(
        () => { commit('ADD_EVENT', event); }
      );
    }
  },
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
