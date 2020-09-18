import React, { memo } from 'react';
import { withRouter } from 'react-router-dom';
import { faHistory } from '@fortawesome/free-solid-svg-icons';
import { faFont } from '@fortawesome/free-solid-svg-icons';
import { faMarkdown } from '@fortawesome/free-brands-svg-icons';

import Header from './common/Header';
import Button from './common/Button';

const NoteEditor = ({ id, editView, resetVals, toggleEditview, history }) => {
    return (
        <>
            <Button callback={history.goBack} options={{ left: true }} />
            <Button callback={resetVals} icon={faHistory} options={{ green: true }} />
            <Button
                callback={() => toggleEditview(!editView)}
                icon={editView ? faMarkdown : faFont}
                sticky
            />
            <Header title={id ? 'Edit Note' : 'New Note'} />
        </>
    );
};

export default memo(withRouter(NoteEditor));
