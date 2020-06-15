import React from 'react'
import dynamic from 'next/dynamic'
import 'react-quill/dist/quill.snow.css'

const QuillNoSSRWrapper = dynamic(
  import('react-quill'), { ssr: false, loading: () => <p>Loading ...</p> }
)

const modules = {
  toolbar: [
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'list': 'ordered' }],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  'size',
  'bold', 'italic', 'underline', 'strike',
  'list'
]

export default function MyEditor(props) {
  const { onChange, initialValue } = props;
  const [value, setValue] = React.useState('');

  const onChangeValue = (v) => {
    onChange(v);
  }

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue])

  return (
    <QuillNoSSRWrapper
      style={{ width: '100%' }}
      modules={modules}
      formats={formats}
      theme='snow'
      value={value}
      onChange={onChangeValue}
    />
  );
}