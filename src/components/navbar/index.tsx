import { ReactNode } from "react";
import "../../styles/_navbar.scss";
import Button from "../button";
import { BsTelephone } from "react-icons/bs";

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
              <span>{navitems[index]}</span>
            </a>
          ))}
      </div>
      <div className="button-item-container">
        <Button text="Contact Me" icon={<BsTelephone size={24} />} />
      </div>
    </nav>
  );
}

export default Navbar;
