import GamesIO from "../assets/images/GamesIO.svg";
import { Dropdown, Navbar } from "react-bootstrap";

interface NavBarProps {
  clickBtn : () => void;
}

const NavBar = ({clickBtn} : NavBarProps) => {
  const navbar=document.getElementById("navbar");
  if(navbar) navbar.classList.remove("navbar-expand")

  return (
    <Navbar expand="none" id="navbar" fixed="top" className="navbar flex">
      <div className="navbar-heading">
        <a className="navbar-brand" href="#">
          <img className="brand-img" src={GamesIO} alt="Comany Logo"></img>
        </a>
      </div>

      <div className="opts-list flex">
        <ul className="navbar-list" id="navList">
          <li className="btn navbar-item" onClick={clickBtn} id="popularity">Popularity</li>
          <li className="btn navbar-item" onClick={clickBtn} id="release-date">Recent</li>
          <li className="btn navbar-item" onClick={clickBtn} id="alphabetical">Alphabetical</li>
          <li className="navbar-itemjk">
            <Dropdown className="navbar-dropdown">
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                Categories
              </Dropdown.Toggle>

              <Dropdown.Menu className="nav-dropdown-menu" id="dropdown-menu">
                <Dropdown.Item className="nav-dropdown-item" href="#/action-1" id="shooter">Shooter</Dropdown.Item>
                <Dropdown.Item className="nav-dropdown-item" href="#/action-2" id="mmorpg">MMORPG</Dropdown.Item>
                <Dropdown.Item className="nav-dropdown-item" href="#/action-3" id="survival">
                  Survival
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
      </div>

      <div className="nav-form flex">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0 nav-form-btn"
          type="submit"
        >
          Search
        </button>
      </div>
    </Navbar>
  );
};

export default NavBar;
