import React from 'react';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';

import Header from '../components/common/Header';
import Button from '../components/common/Button';

const NotFoundPage = ({ history }) => {
  return (
    <>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <Button
        text="back"
        callback={() => history.push('/')}
        options={{ left: true }}
      />
      <Header title={'Not Found - 404'} />
    </>
  );
};

export default withRouter(NotFoundPage);
