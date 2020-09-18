import React, { useEffect, useCallback } from 'react';
import { useMutation } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import { faTrash, faSave } from '@fortawesome/free-solid-svg-icons';

import { REMOVE_NOTE } from '../apollo/queries';
import NotFoundPage from '../pages/NotFoundPage';
import NoteDetails from '../components/NoteDetails';
import downloadFile from '../utils/downloadFile';
import codeHighlight from '../utils/prism';
import Button from '../components/common/Button';

const NotesContainer = ({ note, history }) => {
  const [removeNote] = useMutation(REMOVE_NOTE);

  useEffect(() => {
    codeHighlight();
  }, []);

  const remove = useCallback(
    async (remove) => {
      if (window.confirm('Are you sure to delete it?')) {
        await remove();
        history.push('/');
      }
    },
    [history],
  );

  if (!note) return <NotFoundPage />;

  return (
    <>
      <Button callback={() => history.push('/')} options={{ left: true }} />
      <Button
        callback={() => downloadFile(note.title, note.content)}
        icon={faSave}
        sticky
        options={{ show: true }}
      />
      {(removeNote) => {
        return (
          <Button
            callback={() => remove(removeNote)}
            icon={faTrash}
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
