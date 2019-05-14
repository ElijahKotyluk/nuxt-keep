<template>
  <v-flex
    xs12
    sm6
    md3
    lg3
    xl2
    class="ma-2"
  >
    <v-card
      elevation="12"
      min-width="215"
      max-width="400"
    >
      <v-card-title :title="title">
        <span class="title" font-weight-light>
          {{ title }}
        </span>
        <v-spacer />
        <v-icon>
          notes
        </v-icon>
      </v-card-title>

      <v-divider />

      <v-card-text>
        {{ content }}
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-dialog
          v-model="dialog"
          width="350"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              flat
              v-on="on"
            >
              <v-icon>
                edit
              </v-icon>
            </v-btn>
          </template>

          <update-note
            :id="id"
          />
        </v-dialog>
        <v-spacer />
        <v-btn
          flat
          icon
          @click="deleteNote(id)"
        >
          <v-icon>
            delete
          </v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
import UpdateNote from './UpdateNote.vue'

export default {
  name: 'Note',
  components: {
    UpdateNote
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    // Dispatch delete note action with the id:
    deleteNote(id) {
      this.$store.dispatch('notes/deleteNote', id)
    }
  }
}
</script>

<style>
.v-card__text {
  min-height: 125px;
}
</style>
