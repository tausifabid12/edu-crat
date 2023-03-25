import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'draft-js/dist/Draft.css';

// Dynamically import the Editor component to avoid server-side rendering issues
const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const Demo = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  };

  const onSave = () => {
    const content = convertToRaw(editorState.getCurrentContent());
    console.log(content);
  };

  return (
    <div>
      <h1>Editor</h1>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        // toolbar={toolbar}
      />
      <button onClick={onSave}>Save</button>
    </div>
  );
};

export default Demo;
