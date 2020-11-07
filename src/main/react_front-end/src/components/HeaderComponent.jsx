import React from "react"
import LogOutButtonComponent from "./LogOutButtonComponent"

class HeaderComponent extends React.Component{

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <a href="https://i.ytimg.com/vi/o6Qwz7PNrII/maxresdefault.jpg" className="navbar-brand">Employee Management App</a>
                        <LogOutButtonComponent />
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent