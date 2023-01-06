import React from "react";
import { useNavigate } from 'react-router-dom';
import color from "./UserDetails.module.scss";
import avater from "../../../images/avatar.svg";
import { useProfile } from './../../Utils/hooks/useProfile';
import { useParams } from "react-router-dom";

const UserDetails = () => {

  const { id } = useParams();

  const navigate = useNavigate()
 const userInfo = useProfile(id)


 
  const handleBack = () => {
    navigate("/users")
  }

  return (
    <main className={color.main}>
      <div className={color.header}>
        <p onClick={handleBack}>&larr; Back to Users</p>

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
          src={userInfo.avatar === "" ? avater : userInfo.avatar}
          className={color.image}
          alt={userInfo.name}
          width={100}
          height={100}
        />
        <td className={color.identifier}>
          <h3>{userInfo.name}</h3>

          <p>{userInfo.id}</p>
        </td>

        <td className={color.line} />
        <td className={color.rating}>
          <p>User's Tier</p>
        </td>
        <td className={color.line} />

        <td className={color.account}>
          <h3>{userInfo.accountBalance}</h3>

          <p>
            {userInfo.accountNumber}/{"Providus Bank"}
          </p>
        </td>

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
            <table>
                <tr>
            <td>
              <p className={color.title}>full name</p>
              <p className={color.info}>{userInfo.name}</p>
            </td>

            <td>
              <p className={color.title}>phone number</p>
              <p className={color.info}>{userInfo.phoneNumber}</p>
            </td>

            <td>
              <p className={color.title}>email address</p>
              <p className={color.info}>{userInfo.email}</p>
            </td>

            <td>
              <p className={color.title}>bvn</p>
              <p className={color.info}>{userInfo.bvn}</p>
            </td>

            <td>
              <p className={color.title}>gender</p>
              <p className={color.info}>{userInfo.gender}</p>
            </td>
            </tr>
            </table>
          </div>

          <div className={color.details}>
            <td>
              <p className={color.title}>Marital status</p>
              <p className={color.info}>{"married"}</p>
            </td>

            <td>
              <p className={color.title}>children</p>
              <p className={color.info}>{10}</p>
            </td>

            <td>
              <p className={color.title}>Type of residence</p>
              <p className={color.info}>{"Parent's house"}</p>
            </td>
          </div>
        </div>
   


             {/* section 2 */}

        <div className={`${color.section} ${color.mt6}`}>
          <h3>Education and Employment</h3>

          <div className={color.details}>
            <table>
                <tr>
            <td>
              <p className={color.title}>level of education</p>
              <p className={color.info}>{userInfo.educationLevel}</p>
            </td>

            <td>
              <p className={color.title}>employment status</p>
              <p className={color.info}>{userInfo.employmentStatus}</p>
            </td>

            <td>
              <p className={color.title}>sectors of employment</p>
              <p className={color.info}>{userInfo.sector}</p>
            </td>

            <td>
              <p className={color.title}>duration of employment</p>
              <p className={color.info}>{userInfo.duration}</p>
            </td>
              
              <td></td>
            </tr>
            </table>
          </div>



          <div className={color.details}>
            <td>
              <p className={color.title}>Office email</p>
              <p className={color.info}>{userInfo.officeEmail}</p>
            </td>

            <td>
              <p className={color.title}>Monthly income</p>
              <p className={color.info}>{userInfo.monthlyIncome}</p>
            </td>

            <td>
              <p className={color.title}>loan repayment</p>
              <p className={color.info}>{userInfo.loanRepayment}</p>
            </td>
          </div>
        </div>



        {/* section 3 */}

           <div className={`${color.section} ${color.mt6}`}>
          <h3>Social</h3>

          <div className={color.details}>
            <table>
                <tr>
            <td>
              <p className={color.title}>Twitter</p>
              <p className={color.info}>{userInfo.twitter}</p>
            </td>

            <td>
              <p className={color.title}>Facebook</p>
              <p className={color.info}>{userInfo.facebook}</p>
            </td>

            <td>
              <p className={color.title}>Instagram</p>
              <p className={color.info}>{userInfo.instagram}</p>
            </td>

           <td></td>
           <td></td>
            </tr>
            </table>
          </div>
          </div>

        {/* section 4*/}

            {/* section 3 */}

            <div className={`${color.section} ${color.mt6}`}>
          <h3>Guarantor</h3>

          <div className={color.details}>
            <table>
                <tr>
            <td>
              <p className={color.title}>full name</p>
              <p className={color.info}>{userInfo.guarantorName}</p>
            </td>

            <td>
              <p className={color.title}>phone number</p>
              <p className={color.info}>{userInfo.guarantorPhone}</p>
            </td>

            <td>
              <p className={color.title}>email address</p>
              <p className={color.info}>{userInfo.guarantorAddress}</p>
            </td>

           <td>
           <p className={color.title}>relationship</p>
              <p className={color.info}>{userInfo.guarantorGender}</p>
           </td>
           <td></td>
            </tr>
            </table>
          </div>
          </div>

{/* 
          section 5 */}
      </section>
    </main>
  );
};

export default UserDetails;
