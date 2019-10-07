import {
  ContentState,
  convertFromHTML,
  convertFromRaw,
  convertToRaw,
  Editor as DraftEditor,
  EditorState,
} from 'draft-js';
import React, { FC, useState } from 'react';

interface Props {
  id: string;
  content: string;
}

const getEditorState = (id: string, content: string): EditorState => {
  const storeRaw = localStorage.getItem(id);

  if (storeRaw) {
    const rawContentFromStore = convertFromRaw(JSON.parse(storeRaw));
    return EditorState.createWithContent(rawContentFromStore);
  } else if (content === '') {
    return EditorState.createEmpty();
  } else {
    const blocksFromHTML = convertFromHTML(content);
    const contentState = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks, blocksFromHTML.entityMap);
    return EditorState.createWithContent(contentState);
  }
};

const Editor: FC<Props> = ({ id, content }) => {
  const [editorState, setEditorState] = useState(getEditorState(id, content));

  const onChange = (editorState: EditorState): void => {
    const contentRaw = convertToRaw(editorState.getCurrentContent());
    localStorage.setItem(id, JSON.stringify(contentRaw));
    setEditorState(editorState);
  };

  return <DraftEditor editorState={editorState} onChange={onChange} />;
};

export default Editor;
