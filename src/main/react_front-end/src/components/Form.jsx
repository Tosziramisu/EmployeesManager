import React, { Component } from 'react';

class Form extends Component {
    constructor(props){
        super(props)
    }

    render() { 
        return (  
        
            <div className="card col-md-6 offset-md-3 offset-md-3">
                    <div className="card-body">
                        <form onSubmit={this.props.onSubmit}>
                            {this.props.children}
                        </form>
                    </div>
            </div>
        );
    }
}
 
export default Form;