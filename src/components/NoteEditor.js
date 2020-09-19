import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './common/Header';
import Button from './common/Button';

const NoteEditor = ({ id, editView, resetVals, toggleEditview, history }) => {
  return (
    <>
      <Button callback={resetVals} text="Back" options={{ green: true }} />
      <Button
        callback={() => toggleEditview(!editView)}
        text="Download"
        sticky
      />
      <Header title={id ? 'Edit Note' : 'New Note'} />
    </>
  );
};

export default memo(withRouter(NoteEditor));
