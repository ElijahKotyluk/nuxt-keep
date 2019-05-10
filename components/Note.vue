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
        <v-btn icon flat>
          <v-icon>
            edit
          </v-icon>
        </v-btn>
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
import { fireDb } from '~/plugins/firebase.js'

export default {
  name: 'Note',
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
  methods: {
    deleteNote(id) {
      console.log(this.id)

      fireDb.collection('notes')
        .doc(this.id)
        .delete()
        .then((res) => {
          console.log('res:', res)
        }).catch((error) => {
          console.log('error:', error)
        })
    }
  }
}
</script>

<style>
.v-card__text {
  min-height: 125px;
}
</style>
