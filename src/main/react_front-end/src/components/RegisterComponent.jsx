import React, { Component } from 'react';
import UserService from "../services/UserService"
import Form from "./Form"
import FormInput from "./FormInput"
import FormSubmitButton from "./FormSubmitButton"

class RegisterComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: "",
            repeatedPassword: "",
            users: []
        }
    }
    async componentDidMount(){
        const {data} = await UserService.getAllUsers()
        const users = data || [];
        this.setState({users})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const {username, password, repeatedPassword, users} = this.state;
        const userExists = users.some(user => user.username === username);
        if(userExists) {
            alert("This username is already taken.");
            return;
        }
        if(password !== repeatedPassword){
            alert("Passwords do not match");
            return;
        }
        const newUser = {username,password};
        await UserService.createUser(newUser)
        this.props.history.push('/log-in')
    }

    moveToLoginWindow = () => {
        this.props.history.push("/log-in")
    }

    changeInputHandler = (event) => {
        const {name, value} = event.target
        this.setState({ [name] : value })
    }

    render() {
        return (
            <div className="container" style={{paddingTop: "22%"}}>
                <Form onSubmit={this.handleSubmit}>

                    <FormInput label="Username" name="username" value={this.state.username} onChange={this.changeInputHandler}/>

                    <FormInput label="Password" name="password" value={this.state.password} onChange={this.changeInputHandler}/>

                    <FormInput label="Repeat Password" name="repeatedPassword" value={this.state.repeatedPassword} onChange={this.changeInputHandler}/>

                    <FormSubmitButton>Register</FormSubmitButton>
                </Form>

                <div className =" text-center">
                    <p style={{paddingTop: "5%"}}>You already have an account?</p>
                    <button className="btn btn-success" onClick={this.moveToLoginWindow}>Login</button>
                </div>
            </div>
        )
    }
}

export default RegisterComponent;
