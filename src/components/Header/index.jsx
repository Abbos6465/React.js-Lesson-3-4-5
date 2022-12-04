import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import {context} from "../../context";
import { useContext } from "react";

const Header = () => {

  const {lang,langs,setLangs,theme,toggleTheme} = useContext(context);
  const t=lang[langs];

  return (
    <>
      <header className={theme==="light" ? "bg-danger text-black" : "bg-info text-white"}>
        <div className="container">
          <nav className="nav">
            <h2 className="nav-logo">LOGO</h2>
            <ul className="nav__ul">
              <li className="nav__ul-list">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "nav__ul-list-link fw-bold text-warning"
                      :(theme==="light" ? "nav__ul-list-link text-black" : "nav__ul-list-link text-white")
                  }
                >
                  {t.home}
                </NavLink>
              </li>
              <li className="nav__ul-list">
                <NavLink
                  to="/task"
                  className={({ isActive }) =>
                  isActive
                    ? "nav__ul-list-link fw-bold text-warning"
                    :(theme==="light" ? "nav__ul-list-link text-black" : "nav__ul-list-link text-white")
                }
                >
                  {t.about}
                </NavLink>
              </li>
              <li className="nav__ul-list">
                <NavLink
                  to="/link3"
                  className={({ isActive }) =>
                  isActive
                    ? "nav__ul-list-link fw-bold text-warning"
                    :(theme==="light" ? "nav__ul-list-link text-black" : "nav__ul-list-link text-white")
                }
                >
                  Contact Me
                </NavLink>
              </li>
              <li className="nav__ul-list">
                <NavLink
                  to="/link4"
                  className={({ isActive }) =>
                  isActive
                    ? "nav__ul-list-link fw-bold text-warning"
                    :(theme==="light" ? "nav__ul-list-link text-black" : "nav__ul-list-link text-white")
                }
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav__ul-list">
                <NavLink
                  to="/link5"
                  className={({ isActive }) =>
                  isActive
                    ? "nav__ul-list-link fw-bold text-warning"
                    :(theme==="light" ? "nav__ul-list-link text-black" : "nav__ul-list-link text-white")
                }
                >
                  Link-5
                </NavLink>
              </li>
              <li className="nav__ul-list">
                <select className="form-select" onChange={(e)=>{setLangs(e.target.value), localStorage.setItem('lang', e.target.value)}} value={localStorage.getItem("lang")}>
                  <option value="uz">UZB</option>
                  <option value="en">ENG</option>
                  <option value="ru">RU</option>
                </select>
              </li>
                <li className="nav__ul-list" onClick={(e)=>{toggleTheme()}}>
                  {theme==="light" ? <i class="bi bi-brightness-high-fill fs-5"></i> : <i class="bi bi-brightness-high fs-5"></i>}
                </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
