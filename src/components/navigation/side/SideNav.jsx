import { IoHome, IoMenu, IoSearch, IoAddCircle } from "react-icons/io5";

import "./sideNav.scss";

const SideNav = () => {
  return (
    <div className="SideNav">
      <div className="hamburger">
        <IoMenu />
      </div>
      <div className="navigation">
        <hr />
        <div className="icon">
          <IoHome />
        </div>
        <div className="icon">
          <IoSearch />
        </div>
        <div className="icon">
          <IoAddCircle />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
