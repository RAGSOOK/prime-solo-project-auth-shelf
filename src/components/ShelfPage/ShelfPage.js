import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';


class ShelfPage extends Component{

    constructor(){
        super();
        this.state ={
            shelfList: [],
        }
    }

    componentDidMount(){
        this.getShelf();
    }

    getShelf = () => {
        axios({
            method: 'GET',
            url: '/api/shelf'
        }).then((response) => {
            console.log(response.data);
            this.setState({
                shelfList: response.data
            });

        }).catch((error) => {
            alert('unable to get shelf.')
        });
    }


    
       

  
    render(){
        return(
            <div>
                <div>Shelf Page</div>
                {JSON.stringify(this.state.shelfList)}
                


            </div>
            

        )
    }
}

export default ShelfPage;