<template>
  <div>
    <h2>Criar eventos</h2>
    <h4>{{ user.id }}</h4>
    <p>Este evento está sendo criado pelo(a) {{ user.name }}</p>
    <p>{{ getEventById(4) }}</p>
    <ul
      v-for="cat in categories"
      :key="cat"
    >
      <il>{{ cat }}</il>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories'])
  }
};
</script>

<style lang="scss" scoped>
</style>
