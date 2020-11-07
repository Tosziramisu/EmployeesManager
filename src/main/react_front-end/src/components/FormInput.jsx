import React, { Component } from 'react';

class FormInput extends Component {
    constructor(props){
        super(props)
    }
    render() { 
        return (  
            <div className="form-group">
                <label>{this.props.label}:</label>
                <input placeholder={this.props.label} name={this.props.name} className="form-control" value={this.props.value} onChange={this.props.onChange}/>
            </div>
        );
    }
}
 
export default FormInput;