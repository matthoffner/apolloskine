import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import NoteContainer from '../containers/NoteContainer';
import base64url from 'base64-url';

const SharePage = ({ match: { params } }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log(base64url.decode(params.title));
    setData({
      title: base64url.decode(params.title),
      content: base64url.decode(params.content),
    });
  }, []);

  return <NoteContainer note={data} />;
};

export default withRouter(SharePage);
