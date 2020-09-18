import React from 'react';
import { EDIT_NOTE, GET_NOTE } from '../apollo/queries';
import EditorContainer from '../containers/EditorContainer';
import { useMutation, useQuery } from '@apollo/client';
import NotFoundPage from './NotFoundPage';
import { withRouter } from 'react-router-dom';

const EditPage = ({ match: { params: id }, history }) => {
  const { data, error, loading } = useQuery(GET_NOTE, { variables: { ...id } });
  const handleSubmit = () => useMutation(EDIT_NOTE, { variables: { ...id } });
  if (!data.note) return <NotFoundPage />;

  if (!data) {
    return null;
  }

  return (
    <EditorContainer
      id={id}
      content={data.note.content}
      title={data.note.title}
      submit={() => handleSubmit()}
      history={history}
    />
  );
};

export default withRouter(EditPage);
