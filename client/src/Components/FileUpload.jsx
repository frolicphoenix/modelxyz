import { useState } from 'react';
import axios from 'axios';
import '../Components/css/fileupload.scss';

export default function FileUpload({setViewerVisible}) {
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
            setModelPath('http://localhost:8888/'+response.data.filepath);
            setViewerVisible(false);
        } 
        catch (error) {
            console.error('Error uploding file: ', error);
        }
    };

    return (
        <>
            <div>
                <div className='modal'>
                    <div className='modal-body'>
                        <h2 className='modal-title'>Upload a file</h2>
                        <p className='modal-desc'>Attach a GLB/GLTF file below</p>
                        
                        <input type='file' onChange={onFileChange} hidden id='file-upload'></input>

                        <label htmlFor='file-upload' className='upload-area'>
                            {/* <span className='upload-title'>Drag a file here to upload</span>  */}
                            <span className='upload-desc'>You can select a file by <br/><strong>clicking here</strong></span>
                        </label>  
                    </div>
                    <div className='modal-footer'>
                        <button className='btn-sec'>Cancel</button>
                        <button className='btn-pri' onClick={onFileUpload}>Upload File</button>
                    </div>
                </div>
            </div>
        </>
    );
}