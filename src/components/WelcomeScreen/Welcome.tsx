import React, {useState} from 'react'
import WelcomeImage from "../../images/welcomeImage.svg"
import Logo from "../../images/lendrLogo.svg";
import classes from "./Welcome.module.scss"

const Welcome = () => {

const [showPassword, setShowPassord] = useState(false)

const togglePassord = () => setShowPassord(!showPassword)


  return (
   <>
    <div className={classes.logo}>
    <a href="/">
        <img src={Logo} alt="lendsqr logo" />
    </a>
</div>

     

    <section className={classes.section}>

     

        <div className={classes.imageStyle}>

        {/* // image */}
          <img src={WelcomeImage} alt="welcome to Lendsqr" />
       </div> 



          {/* // form starts here */}

          
        <div className={classes.contentStyle}>
           <h2 className={classes.title}>Welcome!</h2>

           <p className={classes.info}>Enter details to login</p>


           <form>
           <div className={classes.inputWrapper}>
            <input type="email" placeholder="email address" />
            </div>

            <div className={`${classes.inputWrapper} ${classes.flex}`}>
            <input type={showPassword ? "text" : "password"} placeholder="password" />
             <span className={classes.show} onClick={togglePassord}>{showPassword ? "hide" : "show" }</span>
            </div>

            <p className={classes.password}>
                <a href="/" target="_blank">Forgotten password?</a>
            </p>

            <button type="button" className={classes.button}>Log in</button>


          



           </form>

        </div>



    </section>
    </>

  )
}

export default Welcome