import React from 'react';
import { useQuery } from '@apollo/client';
import { withRouter } from 'react-router-dom';
import { GET_NOTE } from '../apollo/queries';
import NoteContainer from '../containers/NoteContainer';

const NotePage = ({ match: { params: id } }) => {
  const { data, loading, error } = useQuery(GET_NOTE, {
    variables: { ...id },
  });

  if (error || loading) {
    return null;
  }

  const note = data.note;
  return <NoteContainer note={note} />;
};

export default withRouter(NotePage);
