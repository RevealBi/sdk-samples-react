import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

function AppHeader(props) {
    return (
        <header className="App-Header">
            { !props.isHome &&
                <OverlayTrigger placement="bottom" overlay={<Tooltip>Home</Tooltip>}>
                    <Link id="home_link" to="/" className="App-Header-Logo-Link"><img alt="Home" src={logo}/></Link>
                </OverlayTrigger>
            }
            { props.isHome &&
                <div className="App-Header-Logo-Link"><img alt="Home" src={logo}/></div>
            }
            <span className="App-Header-Title">{props.title}</span>
        </header>
    );
}

export default AppHeader;