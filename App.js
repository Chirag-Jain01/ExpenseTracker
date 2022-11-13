import Layout from "./component/pages/Layout";
import Home from "./component/pages/Home";

import Dashboard from "./component/pages/Dashboard";
import LoginReg from "./component/pages/auth/LoginReg";
import UserLogin from "./component/pages/auth/UserLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SendPasswordResetEmail from "./component/pages/auth/SendPasswordResetEmail";
import ResetPassword from "./component/pages/auth/ResetPassword";

// import HeaderComponent from "./components/HeaderComponent";
import ListExpensesComponent from "./component/pages/components/ListExpensesComponent";
import AddExpenseComponent from "./component/pages/components/AddExpenseComponent";
import UpdateExpenseComponent from "./component/pages/components/UpdateExpenseComponent";
import ViewExpenseComponent from "./component/pages/components/ViewExpenseComponent";

function App() {
    return ( <
        >
        <
        BrowserRouter >
        <
        Routes >
        <
        Route path = "/"
        element = { < Layout / > } >
        <
        Route index element = { < Home / > }
        />{" "} <
        Route path = "login"
        element = { < LoginReg / > }
        />{" "} <
        Route path = "UserLogin"
        element = { < UserLogin / > }
        />{" "} <
        Route path = "add-expenses"
        element = { < AddExpenseComponent / > }
        />{" "} <
        Route path = "expenses"
        element = { < ListExpensesComponent / > }
        />{" "} <
        Route path = "update-expenses/:id"
        element = { UpdateExpenseComponent }
        />{" "} <
        Route path = "view-expenses/:id"
        element = { ViewExpenseComponent }
        />{" "} <
        Route path = "Dashboard"
        element = { < Dashboard / > }
        />{" "} <
        Route path = "sendpasswordresetemail"
        element = { < SendPasswordResetEmail / > }
        />{" "} <
        Route path = "reset"
        element = { < ResetPassword / > }
        />{" "} <
        /Route>{" "} <
        /Routes>{" "} <
        /BrowserRouter>{" "} <
        />
    );
}

export default App;