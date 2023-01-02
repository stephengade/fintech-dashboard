import React from 'react'
import WelcomeImage from "../../images/welcomeImage.svg"
import Logo from "../../images/lendrLogo.svg";
import classes from "./Welcome.module.scss"

const Welcome = () => {
  return (
    <main className={classes.main}>

        <div className={""}>
            <a href="/">
                <img src={Logo} alt="lendsqr logo" />
            </a>
        </div>

    <section className={classes.section}>

        <div className={classes.imageStyle}>
          <img src={WelcomeImage} alt="welcome to Lendsqr" />
       </div> 

        <div>
           <h2>Welcome</h2>

           <p>Enter details to login</p>


           <form>
            <input type="email" placeholder="email address" />

            <div className={""}>

            <input type="password" placeholder="email address" />
             <span>show</span>
            </div>

            <p className={""}>
                <a href="/" target="_blank">Forgotten password?</a>
            </p>

            <button type="button" className={""}>Login</button>


          



           </form>

        </div>



    </section>
    </main>
  )
}

export default Welcome