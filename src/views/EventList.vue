<template>
  <div>
    <h1>Eventos</h1>
    <p><i>Olá <span>{{ user.user.name }}</span> estes são os eventos disponíveis:</i></p>
    <EventCard
      v-for="event in event.events"
      :key="event.id"
      :event="event"
    />
    <template v-if="page != 1">
      <router-link
        :to="{ name: 'event-list', query: { page: page - 1 } }"
        rel="prev"
      >
        Anterior</router-link>
    </template>
    <template v-if="hasNextPage"> | </template>
    <router-link
      v-if="hasNextPage"
      :to="{ name: 'event-list', query: { page: page + 1 } }"
      rel="next"
    >
      Próximo</router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import { mapState } from 'vuex';

export default {
  components: {
    EventCard
  },
  created() {
    this.perPage = 3;

    this.$store.dispatch('event/fetchEvents', {
      perPage: this.perPage,
      page: this.page
    });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page, 10) || 1;
    },
    hasNextPage() {
      return this.event.totalEvents > this.page * this.perPage;
    },
    ...mapState(['event', 'user'])
  }
};
</script>

<style scoped>
span {
  color: #299164;
  font-weight: 800;
}
</style>
