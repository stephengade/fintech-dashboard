import { useState, useEffect } from "react";
import axios from "axios";
import { formatMoney } from "../formatDate";


export const currencyFormatter = (value: any) => new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: value
  })

export const useProfile = (id: any) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    id: "",
    email: "",
    phoneNumber: "",
    avatar: "",
    gender: "",
    bvn: "",
    address: "",
    currency: "",
    guarantorName: "",
    guarantorPhone: "",
    guarantorGender: "",
    guarantorAddress: "",
    accountBalance: "",

    accountNumber: "",
    facebook: "",
    instagram: "",
    twitter: "",
    educationLevel: "",
    employmentStatus: "",
    sector: "",
    duration: "",
    officeEmail: "",
    monthlyIncome: "",
    loanRepayment: "",
  });

  useEffect(() => {
    axios
      .get(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      )
      .then((response) => {
        setUserInfo({
          name: `${response.data.profile.firstName} ${response.data.profile.lastName}`,
          id: response.data.id,
          email: response.data.email,
          phoneNumber: response.data.phoneNumber,
          avatar: response.data.profile.avatar,
          gender: response.data.profile.gender,
          bvn: response.data.profile.bvn,
          address: response.data.profile.address,
          currency: response.data.profile.currency,
          guarantorName: `${response.data.guarantor.firstName} ${response.data.guarantor.lastName}`,
          guarantorPhone: response.data.guarantor.phoneNumber,
          guarantorGender: response.data.guarantor.gender,
          guarantorAddress: response.data.guarantor.address,
          accountBalance: `${formatMoney(response.data.profile.currency, response.data.accountBalance)}`,
          accountNumber: response.data.accountNumber,
          facebook: response.data.socials.facebook,
          instagram: response.data.socials.instagram,
          twitter: response.data.socials.twitter,
          educationLevel: response.data.education.level,
          employmentStatus: response.data.education.employmentStatus,
          sector: response.data.education.sector,
          duration: response.data.education.duration,
          officeEmail: response.data.education.officeEmail,
          monthlyIncome: `${formatMoney(response.data.profile.currency, response.data.education.monthlyIncome.join(" - "))}`,
          loanRepayment: `${formatMoney(response.data.profile.currency, response.data.education.loanRepayment)}` ,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return userInfo;
};
