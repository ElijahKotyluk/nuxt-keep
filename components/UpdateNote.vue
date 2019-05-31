<template>
  <v-card
    elevation="12"
  >
    <v-toolbar>
      <v-toolbar-title>
        Edit Note
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

      <v-textarea
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
        @click="updateNote()"
      >
        Submit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'UpdateNote',
  props: {
    id: {
      type: String,
      default: ''
    }
  },
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
    updateNote(id, title, content) {
      console.log('Dispatching update acttion')
      console.log(`id: ${this.id} title: ${this.title} content: ${this.content}`)
      const note = {
        id: this.id,
        title: this.title,
        content: this.content
      }
      console.log('note:', note)
      this.$store.dispatch('notes/updateNote', note)
    }
  }
}
</script>
