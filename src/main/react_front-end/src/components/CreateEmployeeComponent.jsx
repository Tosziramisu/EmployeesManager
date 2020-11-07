import React from "react"
import { AuthContext } from "../contexts/AuthContext"
import EmployeeService from "../services/EmployeeService"
import FormInput from "./FormInput"

class CreateEmployeeComponent extends React.Component{
    static contextType = AuthContext
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            firstName: "",
            lastName: "",
            emailId: ""
        }
        this.changeInputHandler = this.changeInputHandler.bind(this)
        this.saveEmployee = this.saveEmployee.bind(this)
        this.backToHomePage = this.backToHomePage.bind(this)
    }

    componentDidMount(){
        const { isLoggedIn } = this.context;
        if(!isLoggedIn)
            this.props.history.push("/log-in")

        if(this.state.id === "_add")
            return
        else{
            EmployeeService.getEmployeeById(this.state.id).then(response => {
                let employee = response.data;
                this.setState({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    emailId: employee.emailId
                })
            })
        }
    }

    changeInputHandler = (event) => {
        const {name, value} = event.target
        this.setState({ [name] : value })
    }

    saveEmployee = (event) => {
        event.preventDefault()
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId}
        console.log(JSON.stringify(employee))

        if(this.state.id === "_add")
        {
            EmployeeService.createEmployee(employee).then(response => {
                this.props.history.push("/employees")
            })
        }
        else
        {
            EmployeeService.updateEmployee(employee, this.state.id).then(response => {
                this.props.history.push("/employees")
            })
        }
    }

    backToHomePage() {
        this.props.history.push("/employees")
    }

    render() {
        let titleText = this.state.id === "_add" ? "Add Employee" : "Update Employee"
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">{titleText}</h3>
                            <div className="card-body">
                                <form>
                                    <FormInput label="First Name" name="firstName" value={this.state.firstName} onChange={this.changeInputHandler}/>

                                    <FormInput label="Last Name" name="lastName" value={this.state.lastName} onChange={this.changeInputHandler}/>

                                    <FormInput label="Email Address" name="emailId" value={this.state.emailId} onChange={this.changeInputHandler}/>

                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.backToHomePage} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateEmployeeComponent
