import React, { Component } from 'react';

class FormSubmitButton extends Component {
    constructor(props){
        super(props)
    }

    render() { 
        return (  
            <button type="submit" className="btn btn-success" >{this.props.children}</button>
        );
    }
}
 
export default FormSubmitButton;