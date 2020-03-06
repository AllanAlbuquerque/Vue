<template>
  <div>
    <h2>Criar eventos</h2>
    <form @submit.prevent="createEvent">
      <label>Selecione uma categoria</label>
      <select v-model="event.category">
        <option
          v-for="cat in categories"
          :key="cat"
        >{{ cat }}</option>
      </select>
      <h3>Nomeie & descreva o seu evento</h3>
      <div class="field">
        <label>Título</label>
        <input
          v-model="event.title"
          type="text"
          placeholder="Adicione um título"
        />
      </div>
      <div class="field">
        <label>Descrição</label>
        <input
          v-model="event.description"
          type="text"
          placeholder="Adicione uma descrição"
        />
      </div>
      <h3>Onde ocorrerá ?</h3>
      <div class="field">
        <label>Localização</label>
        <input
          v-model="event.location"
          type="text"
          placeholder="Adicione a localização"
        />
      </div>
      <h3>Quando ocorrerá ?</h3>
      <div class="field">
        <label>Data</label>
        <datepicker
          v-model="event.date"
          placeholder="Selectione uma data"
        />
      </div>
      <div class="field">
        <label>Horário</label>
        <select v-model="event.time">
          <option
            v-for="time in times"
            :key="time"
          >{{ time }}</option>
        </select>
      </div>
      <input
        type="submit"
        class="button -fill-gradient"
        value="Confirmar"
      />
    </form>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

export default {
  components: {
    Datepicker
  },
  data() {
    const times = [];
    for (let i = 1; i <= 24; i++) {
      times.push(`${i}:00`);
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    };
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          });
          this.event = this.createFreshEventObject();
        })
        .catch(() => {
        });
    },
    createFreshEventObject() {
      const { user } = this.$store.state.user;
      const id = Math.floor(Math.random() * 10000);

      return {
        id,
        user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      };
    }
  }
};
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
