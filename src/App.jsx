import React, { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import FileUpload from './Components/FileUpload';
import ModelViewer from './Components/ModelViewer';

function App() {
  const [viewerVisible, setViewerVisibile] = useState(true);
  const [modelPath, setModelPath] = useState('');
  
  return (
    <>
      <div className="home">
        <Header />
        <div>
          {viewerVisible ? (
            <FileUpload setViewerVisible={setViewerVisibile} setModelPath={setModelPath} />
          ) : (
            <ModelViewer modelPath={modelPath} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
