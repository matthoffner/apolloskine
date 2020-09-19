import React, { useEffect, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';

import { REMOVE_NOTE } from '../apollo/queries';
import NotFoundPage from '../pages/NotFoundPage';
import NoteDetails from '../components/NoteDetails';
import downloadFile from '../utils/downloadFile';
import codeHighlight from '../utils/prism';
import Button from '../components/common/Button';

const NotesContainer = ({ note, history }) => {
  useEffect(() => {
    codeHighlight();
  }, []);

  const remove = useCallback(
    async (remove, id) => {
      if (window.confirm('Are you sure to delete it?')) {
        await remove();
        useMutation(REMOVE_NOTE, { variables: { id } });
        history.push('/');
      }
    },
    [history],
  );

  if (!note) return <NotFoundPage />;

  return (
    <>
      <Button
        text="Back"
        callback={() => history.push('/')}
        options={{ left: true }}
      />
      <Button
        callback={() => downloadFile(note.title, note.content)}
        text="Save"
        sticky
        options={{ show: true }}
      />
      {(removeNote) => {
        return (
          <Button
            callback={() => remove(removeNote, id)}
            text="Delete"
            options={{ red: true, left: false }}
          />
        );
      }}
      <Button
        callback={() => history.push(`/edit/${note.id}`)}
        options={{ green: true }}
        text="Edit"
        large
      />
      <NoteDetails {...note} />
    </>
  );
};

export default withRouter(NotesContainer);
