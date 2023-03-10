import React, { useState } from "react";
import logo from "../logo.png";
import { BsSearch } from "react-icons/bs";
import "./Navbar.css";

export default function Navbar() {
  const [close, setClose] = useState(true);
  return (
    <nav>
      <div className="container">
        <div className="wrap-nav">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="list-menu">
            <p>Home</p>
            <p>Alcoholic</p>
          </div>
          <div className="wrap-search">
            {close ? (
              <div className="wrap-search-open">
                <input type="text" placeholder="Search recipe drink..." />
              </div>
            ) : (
              <div className="wrap-search-close">
                <input type="text" placeholder="Search recipe drink..." />
              </div>
            )}
            {close ? (
              <div className="icon-search-open">
                <BsSearch
                  onClick={() => setClose(false)}
                  color="#2E4227"
                  size={15}
                />
              </div>
            ) : (
              <div className="icon-search-close">
                <BsSearch
                  onClick={() => setClose(true)}
                  color="#2E4227"
                  size={15}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
