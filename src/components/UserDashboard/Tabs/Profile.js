/* import React, { Component } from "react";

//Import Firebase
import firebase, { messaging } from "firebase";

//Import npm bulma
import "bulma/css/bulma.css";

//Import npm react-filepond
import { FilePond, File, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// FilePond Register plugin
import FilePondImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import StorageDataTable from "./StorageDataTable";
registerPlugin(FilePondImagePreview);

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [], //File Upload
      uploadValue: 0, //Process Upload
      filesMetadata: [], //Metadata Firebase
      rows: [] //DataTable
    };

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDJf5im9Um5cC8QlNx5EZOYZNARdzqay2E",
      authDomain: "final-project-d40f0.firebaseapp.com",
      databaseURL: "https://final-project-d40f0.firebaseio.com/",
      projectId: "final-project-d40f0",
      storageBucket: "gs://final-project-d40f0.appspot.com",
      messagingSenderId: "322600101425"
    };
    firebase.initializeApp(config);
  }

  componentWillMount() {
    this.getMetaDataFromDatabase();
  }

  //Metadata Firebase
  getMetaDataFromDatabase() {
    console.log("getMetaDataFromDatabase");
    const databaseRef = firebase.database().ref("/filepond");

    databaseRef.on("value", snapshot => {
      this.setState(
        {
          filesMetadata: snapshot.val()
        },
        () => this.addMetadataToList()
      );
    });
  }
  //โหลดข้อมูลเข้า list table
  addMetadataToList() {
    let i = 1;
    let rows = [];

    //Loop add data to rows
    for (let key in this.state.filesMetadata) {
      let fileData = this.state.filesMetadata[key];

      let objRows = {
        no: i++,
        key: key, //ใช้เพื่อ Delete
        name: fileData.metadataFile.name,
        downloadURLs: fileData.metadataFile.downloadURLs,
        fullPath: fileData.metadataFile.fullPath,
        size: fileData.metadataFile.size,
        contentType: fileData.metadataFile.contentType
      };

      rows.push(objRows);
    }

    this.setState(
      {
        rows: rows
      },
      () => {
        console.log("Set Rows");
      }
    );
  }

  handleInit() {
    // handle init file upload here
    console.log("now initialised", this.pond);
  }

  handleProcessing(fieldName, file, metadata, load, error, progress, abort) {
    // handle file upload here
    console.log(" handle file upload here");
    console.log(file);

    const fileUpload = file;
    const storageRef = firebase.storage().ref(`filepond/${file.name}`);
    const task = storageRef.put(fileUpload);

    task.on(
      `state_changed`,
      snapshort => {
        console.log(snapshort.bytesTransferred, snapshort.totalBytes);
        let percentage =
          (snapshort.bytesTransferred / snapshort.totalBytes) * 100;
        //Process
        this.setState({
          uploadValue: percentage
        });
      },
      error => {
        //Error
        this.setState({
          messag: `Upload error : ${error.message}`
        });
      },
      () => {
        //Success
        this.setState({
          messag: `Upload Success`,
          picture: task.snapshot.downloadURL //เผื่อนำไปใช้ต่อในการแสดงรูปที่ Upload ไป
        });

        //Get metadata
        storageRef
          .getMetadata()
          .then(metadata => {
            // Metadata now contains the metadata for 'filepond/${file.name}'
            let metadataFile = {
              name: metadata.name,
              size: metadata.size,
              contentType: metadata.contentType,
              fullPath: metadata.fullPath,
              downloadURLs: metadata.downloadURLs[0]
            };

            //Process save metadata
            const databaseRef = firebase.database().ref("/filepond");
            databaseRef.push({ metadataFile });
          })
          .catch(function(error) {
            this.setState({
              messag: `Upload error : ${error.message}`
            });
          });
      }
    );
  }
  

  render() {
    const { rows, filesMetadata } = this.state;
    return (
      <div className="App">
        <div className="Margin-25">
          {/* Pass FilePond properties as attributes */}
          <FilePond
            allowMultiple={true}
            maxFiles={3}
            ref={ref => (this.pond = ref)}
            server={{ process: this.handleProcessing.bind(this) }}
            oninit={() => this.handleInit()}
          >
            {/* Set current files using the <File/> component */}
            {this.state.files.map(file => (
              <File key={file} source={file} />
            ))}
          </FilePond>
          <StorageDataTable
          rows={rows}
          filesMetadata={filesMetadata}
          deleteData={this.deleteMetaDataFromDatabase}/>
        </div>
      </div>
    );
  }
}

// export default Profile;
