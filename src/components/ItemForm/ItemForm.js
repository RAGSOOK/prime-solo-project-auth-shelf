import React, { Component } from 'react';
import { connect } from 'react-redux';

class ItemForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            description: '',
            image_url: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = {type: 'SEND_ITEM',
                        payload: this.state};
        this.props.dispatch(action);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type='text' 
                    placeholder='Description' name='description'/>

                <input onChange={this.handleChange} type='text' 
                    placeholder='Image URL' name='image_url'/>

                <button type='submit' value='Submit'>Submit</button>
            </form>
        );
    }
}

export default connect()(ItemForm);