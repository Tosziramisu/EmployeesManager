import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import ListEmployeeComponent from './components/ListEmployeeComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import LogInComponent from './components/LogInComponent';
import AuthContextProvider from './contexts/AuthContext';
import RegisterComponent from './components/RegisterComponent';

function App() {
  return (
    <div>
      <Router>
        <AuthContextProvider>
          <HeaderComponent />
          <div className="container">
            <Switch>
              
              <Route path="/" exact component={LogInComponent}></Route>
              <Route path="/employees" component={ListEmployeeComponent}></Route>
              <Route path="/add-employee/:id" component={CreateEmployeeComponent}></Route>
              <Route path="/log-in" component={LogInComponent}></Route>
              <Route path="/register" component={RegisterComponent}></Route>
            </Switch>
          </div>
          <FooterComponent />
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
