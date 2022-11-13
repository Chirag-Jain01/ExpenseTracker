// import { Button, CssBaseline, Grid, Typography } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import ChangePassword from "./auth/ChangePassword";
// import React, { useState, useEffect } from "react";
// import Header from "./expenseTrack/Header";
// import IncomeList from "./expenseTrack/IncomeList";
// import IncomeForm from "./expenseTrack/IncomeForm";
// import IncomeItem from "./expenseTrack/IncomeItem";
// import "./expenseTrack/index.css";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     console.log("Logout Clicked");
//     navigate("/login");
//   };
//   const [income, setIncome] = useState([]);
//   const [totalIncome, setTotalIncome] = useState(0);

//   useEffect(() => {
//     let temp = 0;
//     for (let i = 0; i < income.length; i++) {
//       temp += parseInt(income[i].price);
//     }

//     setTotalIncome(temp);
//   }, [income]);
//   return (
//     <>
//       {" "}
//       {/* <CssBaseline />

//                     */}{" "}
//       <div>
//         <Header totalIncome={totalIncome} />{" "}
//         <IncomeForm income={income} setIncome={setIncome} />{" "}
//         <IncomeList income={income} setIncome={setIncome} />{" "}
//       </div>{" "}
//       <Button
//         variant="contained"
//         color="warning"
//         size="large"
//         onClick={handleLogout}
//         sx={{ mt: 8 }}
//       >
//         {" "}
//         Logout{" "}
//       </Button>{" "}
//     </>
//   );
// };

// export default Dashboard;

import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import FooterComponent from "./components/FooterComponent";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import ListExpensesComponent from "./components/ListExpensesComponent";
import AddExpenseComponent from "./components/AddExpenseComponent";
import UpdateExpenseComponent from "./components/UpdateExpenseComponent";
import ViewExpenseComponent from "./components/ViewExpenseComponent";

const Dashboard = () => {
    return ( <
        >
        <
        ListExpensesComponent / > { " " } <
        />
    );
};

export default Dashboard;