import briefcase from "../../images/icons/briefcase.svg";
import dashboard from "../../images/icons/dashboard.svg";
import users from "../../images/icons/users.svg";
import guarantors from "../../images/icons/guarantors.svg";
import loans from "../../images/icons/loans.svg";
import decision from "../../images/icons/decision.svg";
import savings from "../../images/icons/savings.svg";
import request from "../../images/icons/request.svg";
import whitelist from "../../images/icons/whitelist.svg";
import karma from "../../images/icons/karma.svg";
import savingProduct from "../../images/icons/savingProduct.svg";
import fees from "../../images/icons/fees.svg";
import transaction from "../../images/icons/transaction.svg";
import services from "../../images/icons/services.svg";
import serviceAccount from "../../images/icons/serviceAccount.svg";
import settlement from "../../images/icons/settlement.svg";
import report from "../../images/icons/report.svg";
import preference from "../../images/icons/fees-coin.svg";
import audit from "../../images/icons/audit.svg";

interface iData {
  link: string;
  icon: string;
  label: string;
}

// top two

export const FirstList = [
  {
    icon: briefcase,
    label: "Switch Organization",
  }
  
];


export const SecondList: iData[] = [
  {
    link: "/dashboard",
    icon: dashboard,
    label: "Dashboard",
  }
]

// customers

export const CustomerList: iData[] = [
  {
    link: "/users",
    icon: users,
    label: "Users",
  },
  {
    link: "/",
    icon: guarantors,
    label: "Guarantors",
  },

  {
    link: "/",
    icon: loans,
    label: "Loans",
  },
  {
    link: "/",
    icon: decision,
    label: "Decision Models",
  },

  {
    link: "/",
    icon: savings,
    label: "Savings",
  },
  {
    link: "/",
    icon: request,
    label: "Loan Requests",
  },

  {
    link: "/",
    icon: whitelist,
    label: "Whitelist",
  },
  {
    link: "/",
    icon: karma,
    label: "Karma",
  },
];

// Business

export const BusinessList: iData[] = [
  {
    link: "/",
    icon: briefcase,
    label: "Organization",
  },
  {
    link: "/",
    icon: request,
    label: "Loan Products",
  },

  {
    link: "/",
    icon: savingProduct,
    label: "Savings Products",
  },
  {
    link: "/",
    icon: fees,
    label: "Fees and Charges",
  },

  {
    link: "/",
    icon: transaction,
    label: "Transactions",
  },
  {
    link: "/",
    icon: services,
    label: "Services",
  },

  {
    link: "/",
    icon: serviceAccount,
    label: "Service Account",
  },
  {
    link: "/",
    icon: settlement,
    label: "Settlements",
  },

  {
    link: "/",
    icon: report,
    label: "Reports",
  },
];

// settings

export const settingList: iData[] = [
  {
    link: "/",
    icon: preference,
    label: "Preferences",
  },

  {
    link: "/",
    icon: fees,
    label: "Fees and Pricing",
  },
  {
    link: "/",
    icon: audit,
    label: "Audit Logs",
  },
];
