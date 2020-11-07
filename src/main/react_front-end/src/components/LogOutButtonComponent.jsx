import React, {useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useHistory } from "react-router-dom";

export default function LogoutButton() {
    const history = useHistory();
    const { isLoggedIn, toggleAuth } = useContext(AuthContext);
    const handleOnClick = () => {
        toggleAuth()
      history.push('/log-in');
    }
    
    if(isLoggedIn)
        return <button className="btn btn-info" 
            style={{
                color: "#fff",
                backgroundColor: "rgb(62, 199, 85)",
                borderColor: "rgb(62, 199, 85)"}}  
            onClick={handleOnClick}>Log out </button> 
    else
        return null
  }