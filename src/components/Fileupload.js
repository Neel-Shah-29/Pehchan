import React,{Component} from 'react';
import axios from 'axios';
import useFileUpload from 'react-use-file-upload';
import { Button } from "react-bootstrap";
import "boxicons";
  
class FileUpload extends Component {
   
    state = {
  
      // Initially, no file is selected
      selectedFile: null
    };
     
    // On file select (from the pop up)
    onFileChange = event => {
     
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
     
    };
     
    // On file upload (click the upload button)
    onFileUpload = () => {
     
      // Create an object of formData
      const formData = new FormData();
     
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
     
      // Details of the uploaded file
      console.log(this.state.selectedFile);
     
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };
     
    // File content to be displayed after
    // file upload is complete
    fileData = () => {
     
      if (this.state.selectedFile) {
          
        return (
          <div style={{color:'white',background:'#000000b3',marginTop:'2rem',margin:'auto',width:'50%',height:'40%',padding:'2rem'}}>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
  
            <p>File Type: {this.state.selectedFile.type}</p>
  
            <p>
              Last Modified:{" "}
              {this.state.selectedFile.lastModifiedDate.toDateString()}
            </p>
  
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4></h4>
          </div>
        );
      }
    };
     
    render() {
     
      return (
        <div style={{ textAlign: 'center', height: '90.7vh',backgroundImage:"url('https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80')"}}>
          
            
            <div><h1>.</h1></div>
            <div style={{background:'#000000b3',marginTop:'2rem',margin:'auto',width:'50%',height:'40%',padding:'2rem'}}>
            <h3 style={{color:'white'}}>
              Upload files
            </h3>
                <div>
                <input style={{color:'white',paddingTop:'1rem',marginLeft:'5rem'}} type="file" onChange={this.onFileChange} />
                </div>
                <Button onClick={this.onFileUpload} variant="success" style={{marginTop:'2rem'}}>Upload</Button>
            </div>
          {this.fileData()}
        </div>
      );
    }
  }
  
  export default FileUpload;
