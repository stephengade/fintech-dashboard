import React from 'react'
import Card from './Card/Card';
import UserIcon from "../../images/userIcon.svg"

const Users = () => {
  return (
    <section className={""}>

        <div className={""}>
            <Card icon={UserIcon} title="USERS" number="2,453" />
            <Card icon={UserIcon} title="ACTIVE USERS" number="2,453" />
            <Card icon={UserIcon} title="USERS WITH LOANS" number="2,453" />
            <Card icon={UserIcon} title="USERS WITH SAVINGS" number="2,453" />
        </div>


    </section>
  )
}

export default Users