import { GET_NOTES } from '../queries';
import seed from '../../utils/seed';

export const saveNotes = (cache) => {
  const { notes } = cache.readQuery({ query: GET_NOTES });
  const jsonNotes = JSON.stringify(notes);

  try {
    localStorage.setItem('notes', jsonNotes);
  } catch (e) {
    console.error(e);
  }
};

export const restoreNotes = () => {
  const notes = localStorage.getItem('notes');
  console.log(notes);

  if (notes) {
    try {
      return JSON.parse(notes);
    } catch (e) {
      console.error(e);
      return [];
    }
  }

  return [seed];
};
