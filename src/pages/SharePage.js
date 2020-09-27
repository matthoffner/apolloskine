import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import NoteContainer from '../containers/NoteContainer';
import base64url from 'base64-url';

const SharePage = ({
  match: {
    params: { title, content },
  },
}) => {
  const [data, setData] = useState({});
  useEffect(() => {
    setData({
      title: base64url.decode(title),
      content: base64url.decode(content),
    });
  }, []);

  return <NoteContainer note={data} />;
};

export default withRouter(SharePage);
