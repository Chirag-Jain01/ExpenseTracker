import {
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Box,
    Alert,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
const Registration = () => {
    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        phoneno: "",
        address: "",
        password: "",
    });
    async function register() {
        let item = {
            name: inpval.name,
            email: inpval.email,
            phoneno: inpval.phoneno,
            address: inpval.address,
            password: inpval.password,
        };
        let result = await fetch("http://localhost:3000/api", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        });
        result = await result.json();
    }
    const [data, setData] = useState([]);
    console.log(inpval);
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
        register();
        const { name, email, phoneno, address, password } = inpval;

        if (name === "") {
            toast.error(" Name field is required!", {
                position: "top-center",
            });
        } else if (email === "") {
            toast.error("Email field is required", {
                position: "top-center",
            });
        } else if (!email.includes("@")) {
            toast.error("Please enter valid email address", {
                position: "top-center",
            });
        } else if (phoneno === "") {
            toast.error("Phone No is require", {
                position: "top-center",
            });
        } else if (phoneno.length < 10) {
            toast.error("Phone Number should be of 10 digits");
        } else if (password === "") {
            toast.error("password field is requred", {
                position: "top-center",
            });
        } else if (password.length < 5) {
            toast.error("password length greater five", {
                position: "top-center",
            });
        } else {
            console.log("data added succesfully");
            history("/userlogin");
            localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));
        }
    };

    return ( <
        >
        <
        Box component = "form"
        noValidate sx = {
            { mt: 1 } }
        id = "registration-form" >
        <
        TextField margin = "normal"
        required fullWidth id = "name"
        name = "name"
        label = "Name"
        value = { inpval.name }
        onChange = { getdata }
        />{" "} <
        TextField margin = "normal"
        required fullWidth id = "email"
        name = "email"
        value = { inpval.email }
        label = "Email Address"
        onChange = { getdata }
        />{" "} <
        TextField margin = "normal"
        required fullWidth id = "phoneno"
        name = "phoneno"
        value = { inpval.phoneno }
        label = "Phone Number"
        type = "text"
        onChange = { getdata }
        />{" "} <
        TextField margin = "normal"
        required fullWidth id = "address"
        name = "address"
        label = "Address"
        type = "text"
        value = { inpval.address }
        onChange = { getdata }
        />{" "} <
        TextField margin = "normal"
        required fullWidth id = "password"
        name = "password"
        label = "Password"
        type = "password"
        value = { inpval.password }
        onChange = { getdata }
        />{" "} <
        FormControlLabel control = { < Checkbox value = "agree"
            color = "primary"
            name = "tc"
            id = "tc" / > }
        label = "I agree to term and condition." /
        >
        <
        Box textAlign = "center" >
        <
        Button type = "submit"
        onClick = { addData }
        variant = "contained"
        sx = {
            { mt: 3, mb: 2, px: 5 } } >
        Join { " " } <
        /Button>{" "} <
        p className = "mt-3" > { " " } { "" }
        Already Have an Account { " " } <
        span > { " " } { "" } < NavLink to = "/userLogin" > Login < /NavLink>{" "} <
        /span>{" "} { "" } { " " } <
        /p>{" "} { "" } { " " } <
        /Box>{" "} { /* {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""} */ } { " " } <
        /Box>{" "} <
        ToastContainer / >
        <
        />
    );
};

export default Registration;