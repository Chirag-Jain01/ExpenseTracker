// import React, { useRef } from "react";

// function IncomeForm({ income, setIncome }) {
//     const desc = useRef(null);
//     const date = useRef(null);
//     const price = useRef(null);
//     const category = useRef(null);

//     function postData() {
//         let item = {
//             desc: desc,
//             date: date,
//             price: price,
//         };
//         fetch("http://localhost:3000/api", {
//             method: "POST",
//             body: JSON.stringify(item),
//             headers: {
//                 "Content-Type": "application/json",
//                 Accept: "application/json",
//             },
//         });
//         // result = result.json();
//     }

//     const AddIncome = (e) => {
//         e.preventDefault();
//         postData();
//         let d = date.current.value.split("-");
//         let newD = new Date(d[0], d[1] - 1, d[2]);
//         setIncome([
//             ...income,
//             {
//                 category: category.current.value,
//                 desc: desc.current.value,
//                 price: price.current.value,
//                 date: newD.getTime(),
//             },
//         ]);

//         category.current.value = "";
//         desc.current.value = "";
//         price.current.value = null;
//         date.current.value = null;
//     };

//     return ( <
//         form className = "income-form"
//         onSubmit = { AddIncome } >
//         <
//         div > < /div>{" "} <
//         div className = "form-inner" >
//         <
//         select className = "form-inner"
//         ref = { category } >
//         <
//         option value = "" > Category < /option>{" "} <
//         option value = "Food  " > Food < /option>{" "} <
//         option value = "Travel  "
//         ref = { category } > { " " }
//         Travel { " " } <
//         /option>{" "} <
//         option value = "Add here, tanuja" > Add here, tanuja < /option>{" "} <
//         option value = "Add here, tanuja" > Add here, tanuja < /option>{" "} <
//         option value = "Add here, tanu" > < /option>{" "} <
//         option value = "Add here, tanu" > < /option>{" "} <
//         /select>{" "} <
//         input type = "text"
//         required name = "desc"
//         id = "desc"
//         placeholder = "Income Description..."
//         ref = { desc }
//         />{" "} <
//         input type = "number"
//         required name = "price"
//         id = "price"
//         placeholder = "Price..."
//         ref = { price }
//         />{" "} <
//         input type = "date"
//         required name = "date"
//         id = "date"
//         placeholder = "Income date..."
//         ref = { date }
//         />{" "} <
//         input type = "submit"
//         value = "Add Income" / >
//         <
//         /div>{" "} <
//         /form>
//     );
// }

// export default IncomeForm;