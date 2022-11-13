import React, { Component } from "react";
import ExpenseService from "../services/ExpenseService";
import { Link } from "react-router-dom";
import "./App.css";

class ListExpensesComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            expenses: [],
        };

        this.addExpense = this.addExpense.bind(this);
        this.editExpense = this.editExpense.bind(this);
        this.deleteExpense = this.deleteExpense.bind(this);
    }

    componentDidMount() {
        ExpenseService.getExpenses().then((res) => {
            this.setState({ expenses: res.data });
        });
    }

    addExpense() {
        this.props.history.push("/add-expenses");
    }

    editExpense(id) {
        this.props.history.push(`/update-expenses/${id}`);
    }

    deleteExpense(id) {
        ExpenseService.deleteExpense(id).then((res) => {
            this.setState({
                expenses: this.state.expenses.filter((expense) => expense.id !== id),
            });
        });
    }

    viewExpense(id) {
        this.props.history.push(`/view-expenses/${id}`);
    }
    render() {
        return ( <
            div className = "d-grid gap-3" >
            <
            h2 className = "text-center d-grid gap-2" > Expense List < /h2>{" "} <
            div className = "justify-content-center text-center " >
            <
            Link to = { "/add-expenses" } >
            <
            button className = "btn btn-primary mr-3"
            size = "md"
            onClick = { this.addExpense } >
            { " " }
            Add Expense { " " } <
            /button>{" "} <
            /Link>{" "} <
            button className = "btn btn-danger"
            size = "md"
            onClick = { this.addExpense } >
            { " " }
            Report { " " } <
            /button>{" "} <
            /div>{" "} <
            div className = "row justify-content-center " >
            <
            table className = "table table-dark table-bordered"
            style = {
                {} } >
            <
            thead >
            <
            tr >
            <
            th > Name < /th> <th> Price </th > < th > Category < /th>{" "} <
            th > Date < /th> <th> Actions </th > { " " } <
            /tr>{" "} <
            /thead>{" "} <
            tbody > { " " } {
                this.state.expenses.map((expense) => (
                    //Database variable names
                    <
                    tr key = { expense.id } >
                    <
                    td > { expense.expense_name } < /td>{" "} <
                    td > { expense.expense_price } < /td>{" "} <
                    td > { expense.category } < /td>{" "} <
                    td > { expense.expense_date } < /td>{" "} { /* format="DD/MM/YYYY"</td> */ } { " " } <
                    td >
                    <
                    button onClick = {
                        () => this.editExpense(expense.id) }
                    className = "btn btn-info" >
                    Update { " " } <
                    /button>{" "} <
                    button style = {
                        { marginLeft: "10px" } }
                    onClick = {
                        () => this.deleteExpense(expense.id) }
                    className = "btn btn-danger" >
                    Delete { " " } <
                    /button>{" "} <
                    button style = {
                        { marginLeft: "10px" } }
                    onClick = {
                        () => this.viewExpense(expense.id) }
                    className = "btn btn-info" >
                    View { " " } <
                    /button>{" "} <
                    /td>{" "} <
                    /tr>
                ))
            } { " " } <
            /tbody>{" "} <
            /table>{" "} <
            /div>{" "} <
            /div>
        );
    }
}

export default ListExpensesComponent;