
import { useState } from 'react';

function ImageUploader() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Here you would typically send the file to a server
      console.log('Uploading file:', selectedFile.name);
      // Add your upload logic here
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept="image/*" />
        <button type="submit">Upload</button>
      </form>
      {previewUrl && (
        <div>
          <h3>Preview:</h3>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: '300px' }} />
        </div>
      )}
    </div>
  );
}

export default ImageUploader;