//rafce

import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  //bs5-navbar-background
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">React Hook</NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" to="/home-custom-hook" aria-current="page">
              Home CustomHook <span className="visually-hidden">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/ant-demo">
              Ant Design
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hooks
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/use-state-demo">
                UseStateDemo
              </NavLink>
              <NavLink className="dropdown-item" to="/use-state-change-profile">
                Change Profile
              </NavLink>
              <NavLink className="dropdown-item" to="/use-effect-didmount">
                UseEffect_DidMount
              </NavLink>
              <NavLink className="dropdown-item" to="/use-effect-didupdate">
                UseEffect_DidUpdate
              </NavLink>
              <NavLink className="dropdown-item" to="/use-effect-unmount">
                UseEffect_UnMount
              </NavLink>
              <NavLink className="dropdown-item" to="/ex-hook-usecallback">
                Ex_Hook_UseCallBack
              </NavLink>
              <NavLink className="dropdown-item" to="/ex-hook-usememo">
                UseMemo
              </NavLink>
              <NavLink className="dropdown-item" to="/ex-hook-useRef">
                UseRef
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hook_Redux
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/ex-hook-redux">
                Ex_Hook_Redux
              </NavLink>
              <NavLink className="dropdown-item" to="/ex-change-fontsize-hook-redux">
                Ex_Change_FontSize_Hook_Redux
              </NavLink>
              <NavLink className="dropdown-item" to="/ex-crud-product">
                Ex_CRUD_Product (Redux)
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Library Hook
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/ex-hook-formik">
                Ex_Hook_Formik
              </NavLink>
            </div>
          </li>
        </ul>
        <form className="d-flex my-2 my-lg-0">
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
