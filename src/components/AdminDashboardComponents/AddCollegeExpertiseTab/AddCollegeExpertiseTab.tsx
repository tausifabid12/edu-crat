import React, { useState } from 'react';
import { Grid, TextField, Paper, Typography, Button } from '@mui/material';
import Dropzone from 'react-dropzone';

interface TabProps {
  setValue: (value: number) => void;
  value: number;
}

const AddCollegeExpertiseTab: React.FC<TabProps> = ({ setValue, value }) => {
  const [files, setFiles] = useState<File[]>([]);

  const handleDrop = (acceptedFiles: File[]) => {
    setFiles([...files, ...acceptedFiles]);
  };

  const handleRemove = (index: number) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleUpload = async () => {
    // try {
    //   const formData = new FormData();
    //   files.forEach((file) => {
    //     formData.append('images', file);
    //   });
    //   const response = await axios.post('/api/upload', formData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data',
    //     },
    //   });
    //   onUpload(response.data.urls);
    //   setFiles([]);
    // } catch (error) {
    //   console.log(error);
    // }
  };
  return (
    <Paper sx={{ p: 5 }}>
      <TextField
        multiline
        rows={6}
        fullWidth
        label="Scholarship details...."
        sx={{ mb: 3 }}
      />
      <TextField multiline rows={6} fullWidth label="Awards" />

      <div>
        <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
          Recruiters
        </Typography>
        <Dropzone onDrop={handleDrop}>
          {({ getRootProps, getInputProps }) => (
            <Paper
              elevation={0}
              {...getRootProps()}
              sx={{
                border: `2px dashed `,
                borderColor: 'grey.500',
                padding: 2,
                borderRadius: 8,
                minHeight: 180,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <input {...getInputProps()} />
              <Typography variant="h6">
                Drag and drop some files here, or click to select files
              </Typography>
            </Paper>
          )}
        </Dropzone>
        <Paper
          elevation={0}
          sx={{ display: 'flex', flexWrap: 'wrap', marginTop: 2 }}
        >
          {files.map((file, index) => (
            <Paper
              elevation={0}
              sx={{
                width: 150,
                height: 150,
                margin: 1,
                position: 'relative',
                '& > img': {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                },
                '& > button': {
                  position: 'absolute',
                  top: 1,
                  right: 1,
                  backgroundColor: 'red',
                },
              }}
              key={file.name}
            >
              <img src={URL.createObjectURL(file)} alt={file.name} />
              <Button onClick={() => handleRemove(index)}>Remove</Button>
            </Paper>
          ))}
        </Paper>
        <Button onClick={handleUpload} disabled={!files.length}>
          Upload
        </Button>
      </div>
      <Button
        onClick={() => setValue(value + 1)}
        variant="outlined"
        color="secondary"
        size="large"
        sx={{ mt: 3 }}
      >
        next
      </Button>
    </Paper>
  );
};

export default AddCollegeExpertiseTab;
