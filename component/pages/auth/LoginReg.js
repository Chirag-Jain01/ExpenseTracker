import { Grid, Card, Tabs, Typography, Tab, Box } from "@mui/material";
import { useState } from "react";
import Pic1 from "../../../images/pic3.jpg";
import Registration from "./Registration";
import UserLogin from "./UserLogin";
import { ShoppingBag } from "@mui/icons-material";

const TabPanel = (props) => {
        const { children, value, index } = props;
        return ( <
            div role = "tabpanel"
            hidden = { value !== index } > { " " } {
                value === index && < Box > { children } < /Box>}{" "} <
                    /div>
            );
        };
        const LoginReg = () => {
            const [value, setValue] = useState(0);
            const handleChange = (event, newValue) => {
                setValue(newValue);
            };
            return ( <
                >
                <
                Grid container sx = {
                    { height: "60vh" } } >
                <
                Grid item lg = { 7 }
                sm = { 5 }
                sx = {
                    {
                        backgroundImage: `url(${Pic1})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        overflow: "none",
                        backgroundPosition: "center",
                        display: { xs: "none", sm: "block" },
                    }
                } >
                < /Grid>{" "} <
                Grid item lg = { 5 }
                sm = { 6 }
                xs = { 10 } >
                <
                Card sx = {
                    { width: "100%", height: "100%" } } >
                <
                Box sx = {
                    { mx: 3, height: 640 } } >
                <
                Box sx = {
                    { borderBottom: 0, borderColor: "divider" } } >
                <
                Tabs value = { value }
                textColor = "secondary"
                indicatorColor = "secondary"
                onChange = { handleChange } >
                { " " } <
                Tab label = "Registration"
                sx = {
                    { textTransform: "none", fontWeight: "bold" } } >
                { " " } <
                /Tab>{" "} <
                /Tabs>{" "} <
                /Box>{" "} <
                TabPanel value = { value }
                index = { 1 } >
                <
                UserLogin / >
                <
                /TabPanel>{" "} <
                TabPanel value = { value }
                index = { 0 } >
                <
                Registration / >
                <
                /TabPanel>{" "} <
                /Box>{" "} <
                Box textAlign = "center"
                sx = {
                    { mt: 2 } } > { " " } {
                    /* <ShoppingBag sx={{ color: 'purple', fontSize: 100 }} />
                                                                                                                                                                                                                                                                                                                                                                                                                                        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Geek-Shop</Typography> */
                } { " " } <
                /Box>{" "} <
                /Card>{" "} <
                /Grid>{" "} <
                /Grid>{" "} <
                />
            );
        };

        export default LoginReg;