<template>
  <v-container fluid fill-height>
    <v-layout align-space-around justify-center row wrap fill-height>
      <note
        v-for="note in notes"
        :id="note.id"
        :key="note.id"
        :title="note.title"
        :content="note.content"
      />
    </v-layout>
  </v-container>
</template>

<script>
import Note from './Note.vue'

export default {
  name: 'NoteList',
  components: {
    Note
  },
  computed: {
    notes() {
      return this.$store.state.notes.list
    }
  },
  created() {
    this.$store.dispatch('notes/getNotes')
  }
}
</script>
