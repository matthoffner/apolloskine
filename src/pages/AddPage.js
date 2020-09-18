import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_NOTE } from '../apollo/queries';
import EditorContainer from '../containers/EditorContainer';

const AddPage = () => {
  const [createNote] = useMutation(ADD_NOTE);
  return <EditorContainer submit={createNote} />;
};

export default AddPage;
