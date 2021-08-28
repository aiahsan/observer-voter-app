import React from "react";
import Icon from "../../styles/Icon";
export default function BannerBar({ text }: { text: string }) {
  return (
    <div className="bannerBar">
      <p className="fw500 fs24 lh36"> {text}</p>
      <div className="khasdf-sadiw">
        <Icon name="menu" />
      </div>
    </div>
  );
}
