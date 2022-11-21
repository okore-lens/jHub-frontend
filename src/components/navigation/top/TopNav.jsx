import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./topNav.scss";

const TopNav = () => {
  return (
    <div className="TopNav">
      <div className="header">
        <h1>ProHub</h1>
        <div className="icon">
          <IoPersonCircleOutline />
        </div>
      </div>
      <div className="navigation">
        <hr />
        <div className="nav-items">
          <Link to="/">
            <div className="nav-item">All</div>
          </Link>
          <Link to="/ict">
            <div className="nav-item">ICT</div>
          </Link>
          <Link to="/ict">
            <div className="nav-item">SCIENCE</div>
          </Link>
          <Link to="/">
            <div className="nav-item">ENGINEERING</div>
          </Link>
          <Link to="/ict">
            <div className="nav-item">FILM</div>
          </Link>
          <Link to="/">
            <div className="nav-item">AGRICULTURE</div>
          </Link>
          <Link to="/ict">
            <div className="nav-item">HEALTH</div>
          </Link>
          <Link to="/">
            <div className="nav-item">ANIMATION</div>
          </Link>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default TopNav;
