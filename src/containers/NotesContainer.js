import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';

import Button from '../components/common/Button';
import Header from '../components/common/Header';
import Note from '../components/Note';

const NotesContainer = ({ notes, history }) => {
  return (
    <>
      <Helmet>
        <title>Note | {notes && '' + notes.length}</title>
      </Helmet>
      <Button text="Add" callback={() => history.push('/add')} large />
      <Header title={'Notes'} />
      {notes && notes.map((note) => <Note key={note.id} {...note} />)}
    </>
  );
};

export default withRouter(NotesContainer);
