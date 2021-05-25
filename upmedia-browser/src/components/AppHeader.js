import '../App.css';
import { Link } from 'react-router-dom';
import homeicon from '../images/home-icon.svg';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function AppHeader(props) {
    return (
        <header className="App-Header">
            { !props.showHome && 
                <OverlayTrigger placement="bottom" overlay={<Tooltip>Home</Tooltip>}>
                  <Link id="home_link" to="/" className="App-Header-Home-Link"><img alt="Home" src={homeicon}/></Link>
                </OverlayTrigger>
            }
            <span className="App-Header-Title">{props.title}</span>
        </header>
    );
}

export default AppHeader;