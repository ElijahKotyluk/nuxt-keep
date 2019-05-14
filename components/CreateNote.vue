<template>
  <v-card
    class="mx-auto my-3"
    elevation="12"
    style="max-width: 250px;"
  >
    <v-toolbar>
      <v-toolbar-title>
        Create Note
      </v-toolbar-title>
    </v-toolbar>

    <v-form
      ref="createNote"
      v-model="form"
      class="pa-3"
    >
      <v-text-field
        v-model="title"
        :rules="[rules.length(0), rules.required]"
        box
        label="title"
      />

      <v-text-field
        v-model="content"
        :rules="[rules.length(0), rules.required]"
        box
        label="content"
      />
    </v-form>
    <v-divider />
    <v-card-actions>
      <v-btn
        flat
        @click="$refs.createNote.reset()"
      >
        Clear
      </v-btn>
      <v-spacer />
      <v-btn
        :disabled="!form"
        class="white--text"
        color="deep-purple accent-4"
        depressed
        @click="createNote()"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CreateNote',
  data() {
    return {
      form: false,
      title: '',
      content: '',
      rules: {
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        required: v => !!v || 'This field is required'
      }
    }
  },
  methods: {
    createNote() {
      if (this.title && this.content) {
        const newNote = {
          title: this.title,
          content: this.content
        }
        this.$store.dispatch('notes/addNote', newNote)
      }
    }
  }
}
</script>

<style>
</style>
