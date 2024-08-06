import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoMdClose, IoMdAttach } from "react-icons/io";

const FileUploader = ({ setFiles }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [localFiles, setLocalFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files);
    setUploading(true);
    setProgress(0);

    const uploadSimulation = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(uploadSimulation);
          setUploading(false);
          return 100;
        }
        return prevProgress + 10;
      });
    }, 100);

    const updatedFiles = [...localFiles, ...selectedFiles];
    setLocalFiles(updatedFiles);
    setFiles(updatedFiles);
  };

  const removeFile = (index) => {
    const updatedFiles = localFiles.filter((_, i) => i !== index);
    setLocalFiles(updatedFiles);
    setFiles(updatedFiles);
  };

  return (
    <div className="container">
      <div className="mb-1">
        <label htmlFor="fileInput" className="btn btn-primary">
          <IoMdAttach size={20} className="me-2" /> Attach File
        </label>
        <input
          id="fileInput"
          type="file"
          className="d-none"
          onChange={handleFileChange}
          multiple
        />
      </div>

      {uploading && (
        <div className="mb-3">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {progress}%
            </div>
          </div>
        </div>
      )}

      {localFiles.length > 0 && (
        <div className="list-group">
          {localFiles.map((file, index) => (
            <div
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {file.name}
              <IoMdClose
                size={20}
                className="text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => removeFile(index)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FileUploader;
