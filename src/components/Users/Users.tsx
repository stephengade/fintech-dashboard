import React from 'react'
import Card from './Card/Card';
import UserIcon from "../../images/userIcon.svg"
import ActiveUser from "../../images/activeIcon.svg"
import loanUser from "../../images/loanIcon.svg"
import savingIcon from "../../images/savingsIcon.svg"
import style from "./Users.module.scss"

const Users = () => {
  return (
    <section className={""}>

        <div className={style.cards}>
            <Card icon={UserIcon} title="USERS" number="2,453" />
            <Card icon={ActiveUser} title="ACTIVE USERS" number="2,453" />
            <Card icon={loanUser} title="USERS WITH LOANS" number="12,453" />
            <Card icon={savingIcon} title="USERS WITH SAVINGS" number="102,453" />
        </div>


    </section>
  )
}

export default Users