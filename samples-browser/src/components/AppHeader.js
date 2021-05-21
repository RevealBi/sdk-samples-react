import '../App.css';
import { Link } from 'react-router-dom';
import homeicon from '../images/home-icon.svg';
import logouticon from '../images/logout-icon.svg';

function AppHeader(props) {
    return (
        <header className="App-Header">
            { !props.showHome && <Link id="home_link" to="/" className="App-Header-Home-Link"><img alt="Home" src={homeicon}/></Link>}
            { <span className="App-Header-Title">{props.title}</span> }
            { props.showHome && props.isAuthenticated && <Link id="logout_link" to="/logout" className="App-Header-Logout-Link"><img alt="Logout" src={logouticon}/></Link>}
        </header>
    );
}

export default AppHeader;