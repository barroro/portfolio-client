import React from 'react';
import MyEditor from '../../../components/editors/my-editor';
import RichEditor from '../../../components/editors/rich-editor';
import dynamic from "next/dynamic";
import DashboardLayout from '../../../components/dashboard-layout';

const Typography = dynamic(import("@material-ui/core/Typography"));

const htmlData = '<p>Hola</p><p>k ase</p>';
export default function About() {
  const onChange = (value) => {
    console.log('Value: ', value);
  }
  return (
    <div style={{ width: '100%' }}>
      <Typography variant="h4" component="h1" gutterBottom>About dashboard</Typography>
      <MyEditor initialValue={htmlData} onChange={onChange} />
      {/* <RichEditor /> */}
    </div>
  );
}