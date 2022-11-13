import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import {
    Grid,
    Card,
    Tabs,
    Container,
    Typography,
    Tab,
    Box,
} from "@mui/material";
import expense1 from "../../images/p.jpg";

const Home = () => {
    return ( <
        >
        <
        section >
        <
        Container >
        <
        Row >
        <
        Col lg = "6"
        md = "6" >
        <
        div className = "hero__content"
        style = {
            { paddingTop: "80px" } } >
        <
        h2 className = "mb-4 hero__title"
        style = {
            { fontWeight: "600", lineHeight: "55px" } } >
        Manage your expense < br / > and stay debt free < br / > { " " } <
        /h2>{" "} <
        p className = "mb-5" > The best expense tracker in the market < /p>{" "} <
        /div>{" "} <
        div className = "search" >
        <
        Link to = { "/login" } >
        <
        button className = "btn btn-dark" > Get in touch < /button>{" "} <
        /Link>{" "} <
        /div>{" "} <
        /Col>{" "} <
        Col lg = "6"
        md = "6" >
        <
        img src = { expense1 }
        alt = ""
        className = "w-100 hero__img" / >
        <
        /Col>{" "} <
        /Row>{" "} <
        /Container>{" "} <
        /section>{" "} <
        />
    );
};

export default Home;