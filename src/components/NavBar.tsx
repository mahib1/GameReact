import GamesIO from "../assets/images/GamesIO.svg";
import { Dropdown, Navbar } from "react-bootstrap";

const NavBar = () => {
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
          <li className="btn navbar-item">Popular</li>
          <li className="btn navbar-item">Recent</li>
          <li className="btn navbar-item">Favourites</li>
          <li className="navbar-item">
            <Dropdown className="navbar-dropdown">
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                Dropdown button
              </Dropdown.Toggle>

              <Dropdown.Menu className="nav-dropdown-menu">
                <Dropdown.Item className="nav-dropdown-item" href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item className="nav-dropdown-item" href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item className="nav-dropdown-item" href="#/action-3">
                  Something else here
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
