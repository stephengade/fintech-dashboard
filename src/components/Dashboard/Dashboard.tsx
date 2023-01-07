import React from 'react'
import design from "./Dashboard.module.scss"
import { StripeEmail } from './../Utils/emailStriper';
import Cookies from 'js-cookie';

const Dashboard = () => {
  const email = Cookies.get("_lemail")
  const getUsername = StripeEmail(email)
  return (
    <section className={design.main__section}>
      <h3 className={design.h3}>Welcome {getUsername ?? "comrade"}</h3>
      </section>
  )
}

export default Dashboard