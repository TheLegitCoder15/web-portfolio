import { ReactNode } from "react";
import "../../styles/_navbar.scss";

type NavbarProps = {
  navitems: string[];
  navicons?: ReactNode[];
};

function Navbar({ navitems, navicons }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="nav-item-container">
        {navicons &&
          navicons.map((iconElement, index) => (
            <a
              key={index}
              className="nav-item"
              href={`/${navitems[index].toLowerCase()}`}
            >
              {iconElement}
              <text>{navitems[index]}</text>
            </a>
          ))}
      </div>
      <div className="button-item-container"></div>
    </nav>
  );
}

export default Navbar;
