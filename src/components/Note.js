import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import Header from './common/Header';

const Note = ({ id, title }) => {
    return (
        <Link to={`/note/${id}`}>
            <Header title={title} isTitle={false} />
        </Link>
    );
};

export default memo(Note);
