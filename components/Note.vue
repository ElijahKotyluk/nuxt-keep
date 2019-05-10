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
      class="text-xs-center"
      elevation="12"
      min-width="215"
      max-width="400"
    >
      <v-layout column>
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
          <v-icon>
            edit
          </v-icon>
          <v-spacer />
          <v-icon>
            delete
          </v-icon>
        </v-card-actions>
      </v-layout>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'Note',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  },
  methods: {}
}
</script>
