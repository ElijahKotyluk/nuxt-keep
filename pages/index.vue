<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="text-xs-center">
      <create-note />
    </div>

    <note-list />
  </v-layout>
</template>

<script>
import CreateNote from '~/components/CreateNote.vue'
import NoteList from '~/components/NoteList.vue'

export default {
  components: {
    CreateNote,
    NoteList
  }
}
</script>
