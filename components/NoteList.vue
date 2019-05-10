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
import { fireDb } from '~/plugins/firebase.js'

export default {
  name: 'NoteList',
  components: {
    Note
  },
  data() {
    return {
      notes: []
    }
  },
  mounted() {
    this.getNotes()
  },
  methods: {
    getNotes() {
      fireDb.collection('notes')
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            console.log('No matching docs')
            return
          }

          snapshot.forEach((doc) => {
            const note = {
              id: doc.id,
              title: doc.data().title,
              content: doc.data().content
            }

            console.log('note:', note)
            this.notes.push(note)
          })
        })
    }
  }
}
</script>
