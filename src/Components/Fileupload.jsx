import './fileupload.css';

export default function Fileupload() {

    return (
        <div>
            <div className="modal show">
                <div className="modal-body">
                    <div className='btn-close'>
                        <a href='/'>Close this window</a>
                    </div>
                    <h2 className="modal-title"> Upload a file </h2>
                    <p className="modal-desc">Attach a .glb file below</p>

                    <input type='file' hidden id='file-upload'></input>

                    <label htmlFor='file-upload' className='upload-area'>
                        <span className="upload-desc">You can select a file by <strong>clicking here</strong></span>
                    </label>
                </div>
                <div className="modal-footer">
                    <button className='btn-sec'>Cancel</button>
                    <button className='btn-pri'>Upload File</button>
                </div>
            </div>
        </div>
    );
}