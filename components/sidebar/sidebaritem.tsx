import React from "react";
import Icon from "../../styles/Icon";
export default function SideBarItem({
  icon,
  title,
  active,
  nav,
}: {
  icon: string;
  title: string;
  active: Boolean;
  nav: string;
}) {
  return (
    <a
      style={{ textDecoration: "none" }}
      href={nav}
      className={`sidebar-item ${active == true ? "sidebaractive" : ""}`}
    >
      <img src={icon} />
      <p>{title}</p>
    </a>
  );
}
