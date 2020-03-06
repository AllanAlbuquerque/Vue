import EventService from '@/services/EventService';

export const namespaced = true;
export const state = {
  events: [],
  event: {},
  totalEvents: 0
};
export const mutations = {
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
};

export const actions = {
  createEvent({ commit, dispatch }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event);
      const notification = {
        type: 'success',
        message: 'Evento criado com sucesso'
      };
      dispatch('notification/add', notification, { root: true });
    }).catch(error => {
      const notification = {
        type: 'error',
        message: `Ocorreu um ocorreu um erro ao criar o evento: ${error.message}`
      };
      dispatch('notification/add', notification, { root: true });
      throw error;
    });
  },
  fetchEvents({ commit, dispatch }, { perPage, page }) {
    EventService.getEvents(perPage, page)
      .then(response => {
        commit('SET_EVENTS', response.data);
        commit('SET_TOTAL_EVENTS', response.headers['x-total-count']);
      })
      .catch(error => {
        const notification = {
          type: 'error',
          message: `Ocorreu um problema ao buscar os eventos: ${error.message}`
        };
        dispatch('notification/add', notification, { root: true });
      });
  },
  fetchEvent({ commit, getters, dispatch }, id) {
    const event = getters.getEventById(id);

    if (event) {
      commit('SET_EVENT', event);
    } else {
      EventService.getEvent(id)
        .then(response => {
          commit('SET_EVENT', response.data);
        })
        .catch(error => {
          const notification = {
            type: 'error',
            message: `Ocorreu um problema ao buscar o evento: ${error.message}`
          };
          dispatch('notification/add', notification, { root: true });
        });
    }
  }
};

export const getters = {
  getEventById: state => id => state.events.find(event => event.id === id)
};
