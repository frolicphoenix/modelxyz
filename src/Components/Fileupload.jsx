import './fileupload.css';

import { useState } from 'react';
import axios from 'axios';

export default function Fileupload({setViewerVisible}) {

    const [file, setFile] = useState(null);
    const [modelPath, setModelPath] = useState('');

    const onFileChange = event => {
        setFile(event.target.files[0]);
    };

    const onFileUpload = async () => {
        const formData = new FormData();
        formData.append('model', file);

        try {
            const response = await axios.post('http://localhost:8888/upload', formData);
            setModelPath('http://localhost:8888/' + response.data.filepath);
            setViewerVisible(false);
        }
        catch (error) {
            console.error('Error uploading file: ', error);
        }
    }

    return (
        <div>
            <div className="modal show">
                <div className="modal-body">
                    <div className='btn-close'>
                        <a href='/'>Close this window</a>
                    </div>
                    <h2 className="modal-title"> Upload a file </h2>
                    <p className="modal-desc">Attach a .glb file below</p>

                    <input type='file' onChange={onFileChange} hidden id='file-upload'></input>

                    <label htmlFor='file-upload' className='upload-area'>
                        <span className="upload-desc">You can select a file by <strong>clicking here</strong></span>
                    </label>
                </div>
                <div className="modal-footer">
                    <button className='btn-sec'>Cancel</button>
                    <button className='btn-pri' onClick={onFileUpload}>Upload File</button>
                </div>
            </div>
        </div>
    );
}