import '../App.css';
import { Link } from 'react-router-dom';
import homeicon from '../images/home-icon.svg';
import plusicon from '../images/plus-icon.svg';
import logouticon from '../images/logout-icon.svg';
import uploadicon from '../images/upload-icon.svg';
import { backend } from '../backend/Backend';
import { useRef } from 'react';

function AppHeader(props) {
    const fileInput = useRef(null);

    const uploadDashboard = () => {
      fileInput.current.click();
    }
  
    const handleFileInput = (e) => {
        const formData = new FormData();
        const files = e.target.files;
        for (var i = 0; i < files.length; i++) {
          const file = files[i];
          formData.append("files", file, file.name);
        }
        backend.uploadDashboards(formData, () => {
          if (props.onReload) {
              props.onReload();
          }
        });
        fileInput.current.value = null;//to avoid an issue when uploading again the same file, it's ignored
    }
    return (
        <>
        <input type="file" ref={fileInput} onChange={handleFileInput} style={{display:'none'}} accept=".rdash" multiple={true}/>
        <header className="App-Header">
            { !props.showHome && <Link id="home_link" to="/" className="App-Header-Home-Link"><img alt="Home" src={homeicon}/></Link>}
            { <span className="App-Header-Title">{props.title}</span> }
            { props.showHome && props.canCreate && <Link id="newdashboard_link" to="/newdashboard" className="App-Header-NewDashboard-Link"><img alt="New Dashboard" src={plusicon}/></Link>}
            { props.showHome && props.canUpload && <button id="uploaddashboard_link" onClick={uploadDashboard} className="App-Header-UploadDashboard-Link"><img alt="Upload Dashboard" src={uploadicon}/></button> }
            { props.showHome && props.isAuthenticated && <Link id="logout_link" to="/logout" className="App-Header-Logout-Link"><img alt="Logout" src={logouticon}/></Link>}
        </header>
        </>
    );
}

export default AppHeader;