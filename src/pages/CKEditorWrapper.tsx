import React, { useRef } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

const CKEditorWrapper: React.FC<Props> = ({ value, onChange }) => {
  const editorRef = useRef(null);

  const handleEditorReady = (editor) => {
    console.log('Editor is ready to use!', editor);
    editorRef.current = editor;
  };

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    onChange(data);
  };

  const handleEditorBlur = (event, editor) => {
    console.log('Blur.', editor);
  };

  const handleEditorFocus = (event, editor) => {
    console.log('Focus.', editor);
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={value}
      onReady={handleEditorReady}
      onChange={handleEditorChange}
      onBlur={handleEditorBlur}
      onFocus={handleEditorFocus}
    />
  );
};

export default CKEditorWrapper;
