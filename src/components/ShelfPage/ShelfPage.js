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

        const action = { type: 'GET_SHELF' };
        this.props.dispatch(action);
        // axios({
        //     method: 'GET',
        //     url: '/api/shelf'
        // }).then((response) => {
        //     console.log(response.data);
        //     this.setState({
        //         shelfList: response.data
        //     });

        // }).catch((error) => {
        //     alert('unable to get shelf.')
        // });
    }


    
       

  
    render(){
        return(
            <div>
                <div>Shelf Page</div>
                {/* {JSON.stringify(this.state.shelfList)} */}
                {JSON.stringify(this.props.reduxStore.shelfReducer)}
                


            </div>
            

        )
    }
}

const mapStateToProps = reduxStore => ({
    reduxStore: reduxStore
})

export default connect(mapStateToProps)(ShelfPage);