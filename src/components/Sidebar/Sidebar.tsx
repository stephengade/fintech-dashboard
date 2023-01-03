import React from "react";

import style from "./Sidebar.module.scss";

import { CustomerList, BusinessList, settingList } from "./SidebarData";

const Sidebar = () => {
  return (
    <>
      <div className={style.wrapper}>
        <p>customers</p>
        <ul className={style.list__item}>
          {CustomerList.map((data, index) => (
            <li key={index}>
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
            <li key={index}>
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
            <li key={index}>
              <img src={data.icon} alt={data.label} />{" "}
              <a href={data.link} target="_blank" rel="noreferrer">
                {data.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
