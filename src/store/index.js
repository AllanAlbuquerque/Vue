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
    events: [],
    event: {},
    totalEvents: 0
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    SET_EVENTS(state, events) {
      state.events = events;
    },
    SET_TOTAL_EVENTS(state, total) {
      state.totalEvents = total;
    },
    SET_EVENT(state, event) {
      state.event = event;
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(() => {
        commit('ADD_EVENT', event);
      });
    },
    fetchEvents({ commit }, { perPage, page }) {
      EventService.getEvents(perPage, page)
        .then(response => {
          commit('SET_EVENTS', response.data);
          commit('SET_TOTAL_EVENTS', response.headers['x-total-count']);
        })
        .catch(error => {
          console.log(`Ocorreu um erro: ${error.response}`);
        });
    },
    fetchEvent({ commit, getters }, id) {
      const event = getters.getEventById(id);

      if (event) {
        commit('SET_EVENT', event);
      } else {
        EventService.getEvent(id)
          .then(response => {
            commit('SET_EVENT', response.data);
          })
          .catch(error => {
            console.log(`Houve um erro: ${error.response}`);
          });
      }
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
