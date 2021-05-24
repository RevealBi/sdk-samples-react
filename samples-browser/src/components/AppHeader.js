import '../App.css';
import { Link } from 'react-router-dom';
import homeicon from '../images/home-icon.svg';
import logouticon from '../images/logout-icon.svg';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function AppHeader(props) {
    return (
        <header className="App-Header">
            { !props.showHome && 
                <OverlayTrigger placement="bottom" overlay={<Tooltip>Home</Tooltip>}>
                  <Link id="home_link" to="/" className="App-Header-Home-Link"><img alt="Home" src={homeicon}/></Link>
                </OverlayTrigger>
            }
            { <span className="App-Header-Title">{props.title}</span> }
            { props.showHome && props.isAuthenticated &&
                <OverlayTrigger placement="bottom" overlay={<Tooltip>Log out</Tooltip>}>
                    <Link id="logout_link" to="/logout" className="App-Header-Logout-Link"><img alt="Logout" src={logouticon}/></Link>
                </OverlayTrigger>
            }
        </header>
    );
}

export default AppHeader;