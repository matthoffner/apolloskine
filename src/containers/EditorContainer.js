import React, { useState, useCallback, useEffect } from 'react';
import { withRouter, Prompt } from 'react-router-dom';
import Helmet from 'react-helmet';

import useFocus from '../hooks/useFocus';
import NoteEditor from '../components/NoteEditor';
import usePreventLeave from '../hooks/usePreventLeave';
import MarkdownEditor from '../components/MarkdownEditor';

const EditorContainer = ({ id, title = '', content = '', submit, history }) => {
    const [titleVal, setTitleVal] = useState(title);
    const [contentVal, setContentVal] = useState(content);
    const [editView, toggleEditview] = useState(true);
    const [shouldPrevent, setPrevent] = useState(true);
    const [enablePrevent, disablePrevent] = usePreventLeave();
    const [inputRef, setInputFocus] = useFocus();

    const resetVals = useCallback(() => {
        if (window.confirm('Are you sure to reset?')) {
            setTitleVal(title ? title : '');
            setContentVal(content ? content : '');
        }
    }, [title, content, setTitleVal, setContentVal]);

    const submitNote = useCallback(async () => {
        if (titleVal === '' || contentVal === '') {
            alert('Your note is empty...');
            return;
        }

        try {
            await setPrevent(false);
            submit({ variables: { id, title: titleVal, content: contentVal } });
            history.push(id ? `/note/${id}` : '/');
        } catch (e) {
            console.error(e);
        }
    }, [id, titleVal, contentVal, submit, history]);

    const preventLeave = useCallback(() => {
        if (window.confirm('Are you sure to leave?')) {
            return true;
        }
        return false;
    }, []);

    const onEnter = useCallback(
        e => {
            if (e.key === 'Enter') {
                setInputFocus();
            }
        },
        [setInputFocus]
    );

    useEffect(() => {
        enablePrevent();
        return () => {
            disablePrevent(); // componentDidUnmount
        };
    }, [enablePrevent, disablePrevent]);

    return (
        <>
            <Helmet>
                <title>{id ? 'Edit Note' : 'New Note'}</title>
            </Helmet>
            <Prompt when={shouldPrevent} message={preventLeave} />
            <NoteEditor
                {...{
                    id,
                    editView,
                    resetVals,
                    toggleEditview
                }}
            />
            <MarkdownEditor
                {...{
                    titleVal,
                    contentVal,
                    setTitleVal,
                    setContentVal,
                    onEnter,
                    editView,
                    submitNote,
                    inputRef
                }}
            />
        </>
    );
};

export default withRouter(EditorContainer);
