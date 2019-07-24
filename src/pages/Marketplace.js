import React, { Component } from 'react';
// import axios from 'axios';
import CategoryList from '../components/CategoryList';

class Marketplace extends Component {
    render() {
        return (
            <div>
                <CategoryList/>
            </div>
        );
    }
}
// class Marketplace extends Component {
//     state = {
//         selectedFile: null
//     }
 
//      fileSelectedHandler = event => {
//          console.log(event.target.files[0]);
//      }
//      fileUploadHandler = () => {
//          const fd = new FormData();
//          fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
//          axios.post(' // this is where I add my backend url // ', fd, {
//              onUploadProgress: ProgressEvent => {
//                  console.log('Upload Progress:' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%');
//              }
//          }
//          .then(res => {
//              console.log(res);
//          }));
//      }
 
//      render() {
//          return (
//              <div className="Marketplace">
//                  <input 
//                  style={{display: 'none'}} 
//                  type='file' 
//                  onChange={this.fileSelectedHandler}
//                  ref={fileInput => this.fileInput = fileInput}/>
//                  <button onClick={() => this.fileInput.click()}>Choose File</button>
//                  <button onClick={this.fileUploadHandler}>Upload Photo</button>
//              </div>
//          );
//      }
//  }
export default Marketplace;

