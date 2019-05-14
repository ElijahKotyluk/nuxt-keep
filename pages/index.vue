<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <div class="text-xs-center">
      <create-note />
    </div>

    <notes />
  </v-layout>
</template>

<script>
import CreateNote from '~/components/CreateNote.vue'
import Notes from '~/components/Notes.vue'

export default {
  components: {
    CreateNote,
    Notes
  }
}
</script>
