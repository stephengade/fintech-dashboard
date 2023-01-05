import React, { useState } from "react";
import color from "./UserDetails.module.scss";
import avater from "../../../images/avatar.svg";

const UserDetails = () => {
  const [userInfo] = useState({
    username: "Adedeju",
    userImage: "",
    userId: "sdsds",
    balance: "qq32323",
    accountNo: "fsfscc",
    bankName: "scscsc",
  });

  const { username, userImage, userId, balance, accountNo, bankName } =
    userInfo;

  return (
    <main className={color.main}>
      <div className={color.header}>
        <p>&larr; Back to Users</p>

        <div className={color.title_buttons}>
          <h3>User Details</h3>

          <div className={color.buttons}>
            <button className={color.danger} type="button">
              blacklist user
            </button>
            <button className={color.success} type="button">
              Activate Users
            </button>
          </div>
        </div>
      </div>

      {/* second section */}

      <div className={color.main__navigation}>
        <img
          src={userImage === "" ? avater : userImage}
          className={color.image}
          alt={username}
          width={100}
          height={100}
        />
        <span className={color.identifier}>
          <h3>{username}</h3>

          <p>{userId}</p>
        </span>

        <span className={color.line} />
        <span className={color.rating}>
          <p>User's Tier</p>
        </span>
        <span className={color.line} />

        <span className={color.account}>
          <h3>{balance}</h3>

          <p>
            {accountNo}/{bankName}
          </p>
        </span>

        <div className={color.links}>
          {["General Details", "Documents", "Bank Details", "Loans"].map(
            (n, i) => (
              <p key={i}>{n}</p>
            )
          )}
        </div>
      </div>

      {/* user description */}
      <section className={color.main__section}>
        {/* first section */}
        <div className={color.section}>
          <h3>Personal Information</h3>

          <div className={color.details}>
            <span>
              <p className={color.title}>full name</p>
              <p className={color.info}>{username}</p>
            </span>

            <span>
              <p className={color.title}>phone number</p>
              <p className={color.info}>{username}</p>
            </span>

            <span>
              <p className={color.title}>email address</p>
              <p className={color.info}>{username}</p>
            </span>

            <span>
              <p className={color.title}>bvn</p>
              <p className={color.info}>{username}</p>
            </span>

            <span>
              <p className={color.title}>gender</p>
              <p className={color.info}>{username}</p>
            </span>
          </div>

          <div className={color.details}>
            <span>
              <p className={color.title}>Marital status</p>
              <p className={color.info}>{username}</p>
            </span>

            <span>
              <p className={color.title}>children</p>
              <p className={color.info}>{username}</p>
            </span>

            <span>
              <p className={color.title}>Type of residence</p>
              <p className={color.info}>{username}</p>
            </span>
          </div>
        </div>

        {/* second section */}
      </section>
    </main>
  );
};

export default UserDetails;
