import { React, Component } from 'react'
import axios from 'axios';
import './App.css';
import Marketplace from './components/Marketplace';

// class App extends Component {

    
//    state = {
//        selectedFile: null
//    }

//     fileSelectedHandler = event => {
//         console.log(event.target.files[0]);
//     }
//     fileUploadHandler = () => {
//         const fd = new FormData();
//         fd.append('image', this.state.selectedFile, this.state.selectedFile.name);
//         axios.post('https://localhost3001/uploads', fd, {
//             onUploadProgress: ProgressEvent => {
//                 console.log('Upload Progress:' + Math.round(ProgressEvent.loaded / ProgressEvent.total * 100) + '%');
//             }
//         }
//         .then(res => {
//             console.log(res);
//         }));
//     }

//     render() {
//         return (
//             <div className="App">
//                 <input 
//                 style={{display: 'none'}} 
//                 type='file' 
//                 onChange={this.fileSelectedHandler}
//                 ref={fileInput => this.fileInput = fileInput}/>
//                 <button onClick={() => this.fileInput.click()}>Choose File</button>
//                 <button onClick={this.fileUploadHandler}>Upload Photo</button>
//             </div>
//         );
//     }
// }
// export default App;


// import Home from './components/Home';
// import { StyleSheet, Text, View } from 'react-native';
// import { LinearGradient } from 'expo';
//   render() {
   
//    return (
//     <LinearGradient
//         colors={['blue', 'green', 'red', 'yellow']}
//         style={{flex: 1}}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 0, y: 1 }}
//       >
//         <Text style={styles.text}>Hello World</Text>
//         <Navbar/>
// </LinearGradient>
//  }
// }
// const styles = StyleSheet.create({
//     text: {
//       fontSize: 56,
//       position: 'absolute',
//       left: '15%',
//       top: '40%',
//       color: 'white',
//       fontWeight: 'bold'
//     }
//   });