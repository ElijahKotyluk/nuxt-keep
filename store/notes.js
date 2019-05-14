import { fireDb } from '~/plugins/firebase.js'

export const state = () => ({
  list: [],
  note: {}
})

/*
    Mutations
*/
export const mutations = {
  // Set the state of list array:
  populateNoteList(state, notes) {
    state.list = notes
  },
  // Set the state of the current note object:
  setNote(state, note) {
    state.note = note
  },
  // Add a new note to the list of notes:
  addNote(state, note) {
    state.list.push(note)
  },
  // Delete a note in the list of notes:
  deleteNote(state, note) {
    state.list.splice(state.list.indexOf(note), 1)
  },
  // @TODO finish update note mutation
  updateNote(state, note) {
    console.log('mutation hit:', note)
  }
}

/*
    Actions
*/
export const actions = {
  // Populate Note list:
  getNotes(context, payload) {
    fireDb.collection('notes')
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const note = {
              id: change.doc.id,
              title: change.doc.data().title,
              content: change.doc.data().content
            }
            // Push note to list array:
            context.commit('addNote', note)
          }
        })
      })
  },
  // Add Note to list and firestore:
  addNote(context, payload) {
    fireDb.collection('notes').add(payload).then((res) => {
      console.log('Firestore response:', res)
      this.title = ''
      this.content = ''
    }).catch((error) => {
      console.log(error)
    })
  },
  // Delete not from list and firestore:
  deleteNote(context, payload) {
    // Commit mutation to delete note;
    context.commit('deleteNote', payload)

    // Delete note from firestore:
    fireDb.collection('notes').doc(payload).delete()
  },
  // Update note in list and firestore:
  updateNote(context, payload) {
    console.log(`payload: ${payload}`)
    fireDb.collection('notes').doc(payload.id).set(payload)

    context.commit('updateNote', payload)
  }
}
