import React from 'react';
import Helmet from 'react-helmet';
import ReactMarkdown from 'react-markdown';

import Header from './common/Header';
import MarkdownStyle from '../styles/markdown';

const NoteDetails = ({ id, title, content }) => {
    return (
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <Header title={title} />
            <MarkdownStyle show>
                <ReactMarkdown className="markdown-body" source={content} />
            </MarkdownStyle>
        </>
    );
};

export default NoteDetails;
