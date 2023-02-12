import React, { useRef } from "react";
import axios from 'axios';
import useFileUpload from 'react-use-file-upload';
import { Button } from "react-bootstrap";
import "boxicons";

const Home = () => {
    const {
        files,
        fileNames,
        fileTypes,
        totalSize,
        totalSizeInBytes,
        handleDragDropEvent,
        clearAllFiles,
        createFormData,
        setFiles,
        removeFile,
    } = useFileUpload();

    const inputRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = createFormData();
        console.log(formData);

        try {
            
            axios.post('https://127.0.0.1:5000/upload', formData, {
                'content-type': 'multipart/form-data',
            });
        } catch (error) {
            console.error('Failed to submit files.');
        }
    };
    return (
        <>

            <div style={{ textAlign: 'center', height: '90.7vh' }}>

                <h1 style={{ color: 'black', padding:'2rem' }}>Upload Files</h1>

                {/* <p>Please use the form to your right to upload any file(s) of your choosing.</p> */}

                <div className="form-container" style={{ border: '2px dashed black', width: '50%', height: '50%', margin: 'auto',background:'darkgray' }}>
                    {/* Display the files to be uploaded */}
                    <div style={{color:'black'}} >
                        
                            {fileNames.map((name) => (
                                <h5 key={name} style={{paddingTop:'1rem'}}>
                                    <span>File name: {name}</span>

                                    <span onClick={() => removeFile(name)}>
                                        <i className="fa fa-times" />
                                    </span>
                                </h5>
                            ))}
                    

                        {files.length > 0 && (
                           <>
                                <p>File types found: {fileTypes.join(', ')}</p>
                                <p>Total Size: {totalSize}</p>
                                <p>Total Bytes: {totalSizeInBytes}</p>

                                <div className="clear-all" style={{marginTop:'4rem'}}>
                                    <Button variant="danger" onClick={() => clearAllFiles()}>Clear All</Button>
                                </div>
                                </>
                        )}
                    </div>

                    {/* Provide a drop zone and an alternative button inside it to upload files. */}
                    <div 
                        onDragEnter={handleDragDropEvent}
                        onDragOver={handleDragDropEvent}
                        onDrop={(e) => {
                            handleDragDropEvent(e);
                            setFiles(e, 'a');
                        }}
                    >
                        {files.length === 0 && (
                            <div style={{color: 'black',margin:'3rem'}}>
                            <p>Drag and drop files here</p>
                            <p><box-icon name='download' color='gray' size='5rem' ></box-icon></p>
                            <Button onClick={() => inputRef.current.click()}>Or select files to upload</Button>
                        </div>
                    )} 
                        

                        {/* Hide the crappy looking default HTML input */}
                        <input
                            ref={inputRef}
                            type="file"
                            multiple
                            style={{ display: 'none' }}
                            onChange={(e) => {
                                setFiles(e, 'a');
                                inputRef.current.value = null;
                            }}
                        />
                    </div>
                </div>

                <div className="submit" style={{marginTop:'2rem'}}>
                    <Button onClick={handleSubmit} variant="success">Upload</Button>
                </div>
            </div>
        </>
    );

}

export default Home;