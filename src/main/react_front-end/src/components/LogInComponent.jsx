import React from "react"
import { AuthContext } from "../contexts/AuthContext"
import UserService from "../services/UserService"
import Form from "./Form"
import FormInput from "./FormInput"
import FormSubmitButton from "./FormSubmitButton"

class LogInComponent extends React.Component{
    static contextType = AuthContext
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            users: []
        }
    }

    componentDidMount(){
        UserService.getAllUsers().then((response) => {
            this.setState({ users: response.data})
        })
    }

    handleSubmit = (toggleAuth) => {
        let currentUser = {
            username: this.state.username,
            password: this.state.password
        }
        let isFound = false
        this.state.users.some(user => {
            if(user.username === currentUser.username && user.password === currentUser.password)
            {
                isFound = true
            }
        })
        if(isFound)
        {
            toggleAuth()
            console.log(this.state.username + " " + this.state.password)
            this.props.history.push("/employees")
        }
        else{
            console.log("Nie ma takiego użytkownika")
        }
    }

    changeInputHandler = (event) => {
        const {name, value} = event.target
        this.setState({ [name] : value })
    }

    moveToRegisterWindow = () => {
        this.props.history.push("/register")
    }

    render() {
        const { toggleAuth } = this.context;
        return (
            <div className="container" style={{paddingTop: "22%"}}>
            <Form onSubmit={() => this.handleSubmit(toggleAuth)}>
            
                <FormInput label="Username" name="username" value={this.state.username} onChange={this.changeInputHandler}/>

                <FormInput label="Password" name="password" value={this.state.password} onChange={this.changeInputHandler}/>
                    
                <FormSubmitButton>Login</FormSubmitButton>
            </Form>
                <div className =" text-center">
                    <p style={{paddingTop: "5%"}}>You dont have an account?</p>
                    <button className="btn btn-success" onClick={() => {this.moveToRegisterWindow()}}>Register</button>
                </div>
            
            </div>
        )  
    }
}

export default LogInComponent