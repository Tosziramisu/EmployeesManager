import React from "react"
import { AuthContext } from "../contexts/AuthContext"
import EmployeeService from "../services/EmployeeService"

class ListEmployeeComponent extends React.Component {
    static contextType = AuthContext
    constructor(props) {
        super(props)
        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this)
        this.updateEmployee = this.updateEmployee.bind(this)
        this.deleteEmployee = this.deleteEmployee.bind(this)
    }

    componentDidMount(){
        const { isLoggedIn } = this.context;
        if(!isLoggedIn)
            this.props.history.push("/log-in")

        EmployeeService.getEmployees().then((response) => {
            this.setState({ employees: response.data})
        })
    }

    addEmployee() {
        this.props.history.push("/add-employee/_add")
    }

    updateEmployee(id){
        this.props.history.push(`/add-employee/${id}`)
    }

    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(response => {
            this.setState({
                employees: this.state.employees.filter(employee => employee.id !== id)
            })
        })
    }

    render() {
        return (
            <div>
                <h2 className="text-center" style={{marginTop: "10px"}}>Employees List</h2>
                <div className="row">
                    <button className="btn btn-primary" style={{marginBottom: "30px", marginTop: "20px"}} onClick={this.addEmployee}>Add Employee</button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Last Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee => 
                                    <tr key = {employee.id}>
                                        <td>{employee.firstName}</td>
                                        <td>{employee.lastName}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button className="btn btn-info" onClick={() => this.updateEmployee(employee.id)}>Update</button>
                                            <button className="btn btn-danger" style={{marginLeft: "10px"}} onClick={() => this.deleteEmployee(employee.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListEmployeeComponent