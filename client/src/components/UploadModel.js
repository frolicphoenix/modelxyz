import React, {useState} from 'react';
import axios from 'axios';
import { response } from 'express';

const UploadModel = ({ onModelUpload }) => {
    const [file, setFile] = useState(null);

    const onFileChange = event => {
        setFile(event.target.file[0]);
    };

    const onFileUpload = async () => {
        const formData = new FormData();
        formData.append("modelFile", file);

        const response = await axios.post('/upload', formData, { headers: {'Content-Type': 'multipart/form-data'} });
        
        onModelUpload(response.data.file.filename);  
    };
       
    const thisSnippet = ( 
        <div>
            <input type="file" onChange={onFileChange} />
            <button onClick={onFileUpload}>Upload model</button>
        </div>
    );

    return thisSnippet;
};

export default UploadModel;