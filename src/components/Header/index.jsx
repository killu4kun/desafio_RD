import React from "react";
import Logo from "../../assets/logo.svg";
import "./styles.scss";

export default function Header() {
  return (
    <section class="top-nav">
      <div>
        <img className="main-logo" src={Logo} alt="logo" />
      </div>
      <input id="menu-toggle" type="checkbox" />
      <label class="menu-button-container" for="menu-toggle">
        <div class="menu-button"></div>
      </label>
      <ul class="menu">
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
        <li>Menu 5</li>
      </ul>
    </section>
  );
}
