// import { Axios } from "axios";
// import React, { useState, useEffect } from "react";

// function IncomeItem({ income, index, removeIncome }) {
//     let date = new Date(income.date);
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();

//     const postDelete = (item, e) => {
//         e.preventDefault();
//         item = {
//             desc: income.desc,
//             date: income.date,
//             price: income.price,
//         };

//         Axios.delete(`http://localhost:3000/${item}`)
//             .then((res) => {
//                 console.log(res);
//             })
//             .catch((err) => console.log(err));
//     };

//     const removeHandle = (i) => {
//         removeIncome(i);
//     };

//     return ( <
//         div className = "income-item" >
//         <
//         button className = "remove-item"
//         onClick = {
//             () => removeHandle(index) }
//         onSubmit = {
//             (item, e) => postDelete(item, e) } >
//         { " " }
//         x { " " } <
//         /button>{" "} <
//         div className = "category" > { income.category } < /div>{" "} <
//         div className = "desc" > { income.desc } < /div>{" "} <
//         div className = "price" > { income.price } < /div>{" "} <
//         div className = "date" > { day + "/" + month + "/" + year } < /div>{" "} <
//         /div>
//     );
// }

// export default IncomeItem;