import { TextField, Button, Box, Alert, Grid, Card } from "@mui/material";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import "mdb-react-ui-kit/dist/css/mdb.min.css";

import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon,
} from "mdb-react-ui-kit";
import "bootstrap/dist/js/bootstrap.bundle";

const UserLogin = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: "",
    });

    const [data, setData] = useState([]);
    console.log(inpval);
    async function login() {
        let item = { email: inpval.email, password: inpval.password };
        let result = fetch("http://localhost:3002/api", {
            method: "POST",
            headers: {
                Accept: "application/json;",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
        });
        result = await result.json();
        localStorage.setItem(JSON.stringify(result));
        history.push("/add");
    }

    const getdata = (e) => {
        // console.log(e.target.value);
        const { value, name } = e.target;
        // console.log(value,name);
        setInpval(() => {
            return {
                ...inpval,
                [name]: value,
            };
        });
    };

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");
        console.log(getuserArr);

        const { email, password } = inpval;
        if (email === "") {
            toast.error("email field is requred", {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error("plz enter valid email addres", {
                position: "top-center",
            });
        } else if (password === "") {
            toast.error("password field is requred", {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error("password length greater five", {
                position: "top-center",
            });
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password;
                });

                if (userlogin.length === 0) {
                    alert("invalid details");
                } else {
                    console.log("user login succesfulyy");
                    localStorage.setItem("user_login", JSON.stringify(userlogin));
                    history("/expenses");
                }
            }
        }
    };

    return ( <
        >
        <
        MDBContainer fluid className = "p-4" >
        <
        MDBRow >
        <
        MDBCol md = "6"
        className = "text-center text-md-start d-flex flex-column justify-content-center" >
        <
        h1 className = "my-5 display-3 fw-bold ls-tight px-3" >
        The best tool < br / >
        <
        span className = "text-primary" >
        for your personal expenses!{ " " } <
        /span>{" "} <
        /h1>{" "} <
        p className = "px-3"
        style = {
            { color: "hsl(217, 10%, 50.8%)" } } > { " " } <
        /p>{" "} <
        /MDBCol>{" "} <
        MDBCol md = "5" >
        <
        MDBCard className = "my-5" >
        <
        MDBCardBody className = "p-5" >
        <
        h2 class = "fw-bold mb-2 text-uppercase" > Login. < /h2>{" "} <
        p class = "fw-italic text-black-50 mb-5" >
        Please enter your login and password { " " } <
        /p>{" "} <
        MDBInput type = "email"
        wrapperClass = "mb-4"
        name = "email"
        label = "Email"
        onChange = { getdata }
        placeholder = "Enter email" /
        > { " " } <
        MDBInput label = "Password"
        wrapperClass = "mb-4"
        type = "password"
        name = "password"
        onChange = { getdata }
        placeholder = "Enter Password" /
        > { " " } <
        div className = "d-flex justify-content-center mb-4" > < /div>{" "} <
        Button className = "w-100 mb-4"
        size = "md"
        variant = "contained"
        onClick = { addData }
        type = "submit" >
        Sign up { " " } <
        /Button>{" "} <
        div className = "text-center" >
        <
        p > Dont have an Account ? < /p>{" "} <
        span > { " " } { "" } < NavLink to = "/login" > Registration < /NavLink>{" "} <
        /span>{" "} <
        /div>{" "} <
        /MDBCardBody>{" "} <
        /MDBCard>{" "} <
        /MDBCol>{" "} <
        /MDBRow>{" "} <
        /MDBContainer>{" "} <
        ToastContainer / >
        <
        />
    );
};

export default UserLogin;