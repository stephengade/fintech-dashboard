import React, { useState } from "react";
import NavBar from "../Navbar/NavBar";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Layout.module.scss" 


interface iLayout {
  children: React.ReactElement | any;
}

const Layout = ({ children }: iLayout) => {

  const [showMenu, setMenu] = useState(false);
   
  const handleMenu = () => setMenu(!showMenu)

  return (
    <>
      <NavBar handleNavMenu={handleMenu} isMenuOpen={showMenu}/>

      <section className={classes.section}>
        <aside className={classes.aside}>
          <Sidebar />
        </aside>
        <main className={classes.main}>{children}
          {showMenu &&  <Sidebar />}
        </main>
      </section>
    </>
  );
};

export default Layout;
