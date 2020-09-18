import uuid from 'uuid/v4';

import { NOTE_FRAGMENT } from '../fragments';
import { GET_NOTES } from '../queries';
import { saveNotes } from './localStorage';

export default {
  Query: {
    notes: (_, variables, { cache }) => {
      const { notes } = cache.readQuery({ query: GET_NOTES });
      return notes;
    },
    note: (_, { id }, { cache, getCacheKey }) => {
      const noteId = getCacheKey({ __typename: 'Note', id });
      const note = cache.readFragment({ fragment: NOTE_FRAGMENT, id: noteId });
      return note;
    },
  },
  Mutation: {
    createNote: (_, { title, content }, { cache }) => {
      const { notes } = cache.readQuery({ query: GET_NOTES });
      const newNote = {
        id: uuid(),
        title,
        content,
        __typename: 'Note',
      };

      cache.writeQuery({
        query: GET_NOTES,
        data: {
          notes: [...notes, newNote],
        },
      });

      saveNotes(cache);

      return newNote;
    },
    editNote: (_, { id, title, content }, { cache, getCacheKey }) => {
      const noteId = getCacheKey({ __typename: 'Note', id });
      const exNote = cache.readFragment({
        fragment: NOTE_FRAGMENT,
        id: noteId,
      });
      const updatedNote = {
        ...exNote,
        title,
        content,
      };

      cache.writeFragment({
        id: noteId,
        fragment: NOTE_FRAGMENT,
        data: updatedNote,
      });

      saveNotes(cache);

      return updatedNote;
    },
    removeNote: async (_, { id }, { cache, getCacheKey }) => {
      const { notes } = cache.readQuery({ query: GET_NOTES });
      const updatedNotes = await notes.filter((e) => e.id !== id);

      cache.writeQuery({
        query: GET_NOTES,
        data: {
          notes: [...updatedNotes],
        },
      });

      saveNotes(cache);
      if (notes.length === updatedNotes.length) return false;
      return true;
    },
  },
};
