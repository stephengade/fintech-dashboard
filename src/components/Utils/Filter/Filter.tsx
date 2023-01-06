import React, { useState } from "react";
import styles from "./Filter.module.scss";
import { formatDate } from "../formatDate";

interface Item {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  dateJoined: string;
  status: string;
}

interface Props {
  items: Item[];
  onFilter: (filteredItems: Item[]) => void;
  setShowFilter: any
}

const Filter = ({ items, onFilter, setShowFilter }: Props) => {
  const [orgName, setOrgName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateJoined, setDateJoined] = useState("");
  const [status, setStatus] = useState("");

//   const handleFilter


  const handleFilter = (e: any) => {
    e.preventDefault();

    const filteredItems = items.filter((item: any) => {
      return (
        (orgName === '' || item.orgName.toLowerCase().includes(orgName.toLowerCase())) &&
        (userName === '' || item.userName.toLowerCase().includes(userName.toLowerCase())) &&
        (email === '' || item.email.toLowerCase().includes(email.toLowerCase())) &&
        (phoneNumber === '' || item.phoneNumber.toLowerCase().includes(phoneNumber.toLowerCase())) &&
        (status === '' || ["active", "inactive", "blacklisted"].includes(status.toLowerCase())) &&
        (dateJoined === "" || formatDate(item.dateJoined).includes(dateJoined) )
      );
    });

    onFilter(filteredItems);
    setShowFilter(false)
  };

  const handleReset = () => {
    setOrgName("");
    setUserName("");
    setEmail("");
    setStatus("");
    setPhoneNumber("");
    setDateJoined("");
    onFilter(items);
    setShowFilter(false)
  };

  
  return  (
    <div className={styles.filterContainer}>
      <label className={styles.label} htmlFor="org">
        Organization
      </label>
      <select
        value={orgName}
        onChange={(e) => setOrgName(e.target.value)}
        className={styles.input}
        id="org"
      >
        <option value="">Select</option>
        <option value="Lendsqr">Lendsqr</option>
        <option value="Flutterwave">Flutterwave</option>
        <option value="Esusu">Esusu</option>
        <option value="Twitter">Twitter</option>
      </select>
      <label className={styles.label} htmlFor="user">
        User
      </label>
      <input
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="User"
        className={styles.input}
        id="user"
      />
      <label className={styles.label} htmlFor="email">
        Email
      </label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className={styles.input}
        id="email"
      />

      <label className={styles.label} htmlFor="date">
        Date Joined
      </label>
      <input
        value={dateJoined}
        onChange={(e) => setDateJoined(e.target.value)}
        placeholder="Date Joined"
        type="date"
        className={styles.input}
        id="date"
      />
      <label className={styles.label} htmlFor="phone">
        Phone number
      </label>
      <input
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone number"
        className={styles.input}
        id="phone"
      />

      <label className={styles.label} htmlFor="status">
        Status
      </label>
      <select
        value={orgName}
        onChange={(e) => setStatus(e.target.value)}
        className={styles.input}
        id="status"
      >
        <option value="">Select</option>
        <option value="Active">active</option>
        <option value="Inactive">inactive</option>
        <option value="Blacklisted">Blacklisted</option>
      </select>
      <div className={styles.buttons}>
        <button onClick={handleReset} className={styles.resetbutton}>
          Reset
        </button>
        <button onClick={handleFilter} className={styles.filterbutton}>
          Filter
        </button>
      </div>
    </div>
      )

};

export default Filter;
