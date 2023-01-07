import style from "./Sidebar.module.scss";

import React, { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

import {
  FirstList,
  SecondList,
  CustomerList,
  BusinessList,
  settingList,
} from "./SidebarData";
import { useLocation } from "react-router-dom";

const DropDown = <BsChevronDown color="#213F7D" />;
const DropUp = <BsChevronUp color="#213F7D" />;

const Sidebar = () => {
  const [isDrop, setDrop] = useState(false);

  const handleDropdown = () => setDrop(!isDrop)

  const location = useLocation();
  
  return (
    <div className={style.menu}>
      <div className={style.wrapper}>
        <ul className={style.list__item}>
          {FirstList.map((data, index) => (
            <li key={index} onClick={handleDropdown} className={style.drop}>
              <img src={data.icon} alt={data.label} />{" "}
              
                <span className={style.p}>{data.label}</span>
              
               {isDrop ? DropUp: DropDown}
            </li>
          ))}
        </ul>
      </div>

      <div className={style.wrapper}>
        <ul className={style.list__item}>
          {SecondList.map((data, index) => (
              <li key={index} className={location.pathname === data.link ? style.activeLink : ""}>
              <img src={data.icon} alt={data.label} />{" "}
              <a href={data.link} target="_blank" rel="noreferrer">
                {data.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.wrapper}>
        <p>customers</p>
        <ul className={style.list__item}>
          {CustomerList.map((data, index) => (
            <li key={index} className={location.pathname === data.link ? style.activeLink : ""}>
              <img src={data.icon} alt={data.label} />{" "}
              <a href={data.link} target="_blank" rel="noreferrer">
                {data.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.wrapper}>
        <p>business</p>
        <ul className={style.list__item}>
          {BusinessList.map((data, index) => (
              <li key={index} className={location.pathname === data.link ? style.activeLink : ""}>
              <img src={data.icon} alt={data.label} />{" "}
              <a href={data.link} target="_blank" rel="noreferrer">
                {data.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.wrapper}>
        <p>settings</p>
        <ul className={style.list__item}>
          {settingList.map((data, index) => (
              <li key={index} className={location.pathname === data.link ? style.activeLink : ""}>
              <img src={data.icon} alt={data.label} />{" "}
              <a href={data.link} target="_blank" rel="noreferrer">
                {data.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
