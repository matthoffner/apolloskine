import React from 'react';
import { useQuery } from '@apollo/client';

import NotesContainer from '../containers/NotesContainer';
import { GET_NOTES } from '../apollo/queries';

const NotesPage = () => {
  const { data, loading, error } = useQuery(GET_NOTES);
  return (
    <>
      <NotesContainer {...data} />
    </>
  );
};

export default NotesPage;
