import React from "react";
import Icon from "../../styles/Icon";
export default function Bar({
  name,
  src,
  desc,
  onClick,
}: {
  name: string;
  src: string;
  desc: string;
  onClick?: () => void;
}) {
  return (
    <div className="observerBar">
      <img src={src} />
      <p className="fw500 fs18 fw32">
        <span>{name}</span>
        {desc}
      </p>
      {onClick ? (
        <button className="btn">
          <Icon name="menu" />
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
