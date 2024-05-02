import React from "react";
import "./Navigation.css";
import { FaAddressBook } from "react-icons/fa6";
import { IoPersonAdd } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <div className="navbar-class-wrapper">
      <div className="navbar-class">
        <div className="navbar-app-name">
          <Link to="/" className="link-component">
            <GrUserManager/>
            <span style={{height:'100%'}}>|</span>
            <h2 className="app-title">
            
            <span style={{fontSize:'2.7rem'}}>C</span>ontact 
            <span style={{fontSize:'2.7rem'}}> M</span>anager</h2>
          </Link>
        </div>
        <div className="navbar-app-options">
          <Link to="/all-contacts" className="link-component">
            <li>
              <FaAddressBook />
              Contacts
            </li>
          </Link>
          <Link to="/add-contact" className="link-component">
            <li>
              <IoPersonAdd />
              Add Contacts
            </li>
          </Link>
        </div>
      </div>
    </div>
  );
};
