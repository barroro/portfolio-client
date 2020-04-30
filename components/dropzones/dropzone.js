import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import Dropzone from "react-dropzone";
import PropTypes from 'prop-types';

function DropzoneImages(props) {
  const { onChange } = props;
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();
  const [fileNames, setFileNames] = useState([]);
  const files = fileNames.map(file => <li key={file.path}>{file.path}</li>);

  const handleDrop = acceptedFiles => {
    setFileNames(acceptedFiles);
    onChange(acceptedFiles);
  }


  return (
    <section className="container">
      {/* <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Arrastra las imagenes aquí</p>
      </div> */}
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Arrastra las imagenes aquí</p>
          </div>
        )}
      </Dropzone>
      <aside>
        <h4>Imagenes</h4>
        <ul>{files}</ul>
      </aside>
    </section>
  );
}

DropzoneImages.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default DropzoneImages;
