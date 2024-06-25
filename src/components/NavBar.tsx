import GamesIO from "../assets/images/GamesIO.svg";
import { Dropdown, Navbar } from "react-bootstrap";

interface NavBarProps {
  onTagClick: (tag: string) => void;
  onSortClick: (sort: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onTagClick, onSortClick }) => {
  return (
    <Navbar expand="none" id="navbar" fixed="top" className="navbar flex">
      <div className="navbar-heading">
        <a className="navbar-brand" href="#">
          <img className="brand-img" src={GamesIO} alt="Company Logo" />
        </a>
      </div>

      <div className="opts-list flex">
        <ul className="navbar-list" id="navList">
          <li className="btn navbar-item" onClick={() => onSortClick("popularity")} id="popularity">Popularity</li>
          <li className="btn navbar-item" onClick={() => onSortClick("release-date")} id="release-date">Recent</li>
          <li className="btn navbar-item" onClick={() => onSortClick("alphabetical")} id="alphabetical">Alphabetical</li>
          <li className="navbar-itemjk">
            <Dropdown className="navbar-dropdown">
              <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                Platforms 
              </Dropdown.Toggle>

              <Dropdown.Menu className="nav-dropdown-menu" id="dropdown-menu">
                <Dropdown.Item className="nav-dropdown-item" onClick={() => onTagClick("pc")} id="shooter">PC</Dropdown.Item>
                <Dropdown.Item className="nav-dropdown-item" onClick={() => onTagClick("browser")} id="mmorpg">Browser</Dropdown.Item>
                <Dropdown.Item className="nav-dropdown-item" onClick={() => onTagClick("all")} id="survival">All</Dropdown.Item>
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
