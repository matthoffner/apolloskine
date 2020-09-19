import React from 'react';
import { GET_NOTE } from '../apollo/queries';
import EditorContainer from '../containers/EditorContainer';
import { useQuery } from '@apollo/client';
import NotFoundPage from './NotFoundPage';
import { withRouter } from 'react-router-dom';

const EditPage = ({ match: { params: id }, history }) => {
  const { data, error, loading } = useQuery(GET_NOTE, { variables: { ...id } });
  if (!data.note) return <NotFoundPage />;

  if (!data) {
    return null;
  }

  return (
    <EditorContainer
      id={id}
      content={data.note.content}
      title={data.note.title}
      history={history}
    />
  );
};

export default withRouter(EditPage);
