import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import {
  EditorContainer,
  ContentContainer,
  ContentInput,
  TitleInput,
} from '../styles/editor';
import { LargeButton } from '../styles/buttons';
import MarkdownStyle from '../styles/markdown';
import codeHighlight from '../utils/prism';

const MarkdownEditor = ({
  titleVal,
  contentVal,
  setTitleVal,
  setContentVal,
  onEnter,
  editView,
  submitNote,
  inputRef,
}) => {
  useEffect(() => {
    codeHighlight();
  }, [contentVal]);

  return (
    <>
      <LargeButton onClick={submitNote}>Save</LargeButton>
      <EditorContainer>
        <TitleInput
          value={titleVal}
          onChange={(e) => setTitleVal(e.target.value)}
          placeholder="Title..."
          name="title"
          onKeyUp={onEnter}
          autoFocus
        />
        <ContentContainer>
          <ContentInput
            value={contentVal}
            onChange={(e) => setContentVal(e.target.value)}
            placeholder="Markdown..."
            name="content"
            show={editView ? 1 : 0}
            inputRef={inputRef}
          />
          <MarkdownStyle editor show={!editView}>
            <ReactMarkdown className="markdown-body" source={contentVal} />
          </MarkdownStyle>
        </ContentContainer>
      </EditorContainer>
    </>
  );
};

export default MarkdownEditor;
