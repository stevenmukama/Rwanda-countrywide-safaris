import React, { useState } from "react";

export const Navigation = (props) => {
  const [setClickedItem] = useState(null);

  const handleItemClick = (item) => {
    setClickedItem(item);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Rwanda country safaris
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#about"
                className="page-scroll"
                data-toggle="collapse"
                data-target=".navbar-collapse.in"
                onClick={() => handleItemClick("About")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="page-scroll"
                data-toggle="collapse"
                data-target=".navbar-collapse.in"
                onClick={() => handleItemClick("Services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="page-scroll"
                data-toggle="collapse"
                data-target=".navbar-collapse.in"
                onClick={() => handleItemClick("Gallery")}
              >
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="page-scroll"
                data-toggle="collapse"
                data-target=".navbar-collapse.in"
                onClick={() => handleItemClick("Team")}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                data-toggle="collapse"
                data-target=".navbar-collapse.in"
                onClick={() => handleItemClick("Contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
