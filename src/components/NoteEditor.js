import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './common/Header';
import Button from './common/Button';

const NoteEditor = ({
  id,
  editView,
  resetVals,
  toggleEditview,
  toggleShareView,
  history,
}) => {
  return (
    <>
      <div style={{ paddingBottom: 10 }}>
        <Button callback={resetVals} text="Reset" options={{ green: true }} />
        <Button
          callback={() => toggleEditview(!editView)}
          text="Download File"
        />
        <Button callback={() => toggleShareView()} text="Share Link" />
      </div>
      <Header title={id ? 'Edit Note' : 'New Note'} />
    </>
  );
};

export default memo(withRouter(NoteEditor));
