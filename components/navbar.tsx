import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Icon from "../styles/Icon";
export default function NavbarCom() {
  return (
    <div className="cst-nav-parrent">
      <Icon name="bell" />
      <img src="/img/logo.png" className="ml-4" />
    </div>
  );
}
