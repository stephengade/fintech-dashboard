import React from "react";
import NavBar from "../Navbar/NavBar";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Layout.module.scss" 


interface iLayout {
  children: React.ReactElement | any;
}

const Layout = ({ children }: iLayout) => {
  return (
    <>
      <NavBar />

      <section className={classes.section}>
        <aside className={classes.aside}>
          <Sidebar />
        </aside>
        <main className={classes.main}>{children}</main>
      </section>
    </>
  );
};

export default Layout;
