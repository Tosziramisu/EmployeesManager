import React from "react"

class FooterComponent extends React.Component{
    constructor(props){
        super()
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <span className="text-muted">All rights reserverd 2020 @Bezimienny</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent