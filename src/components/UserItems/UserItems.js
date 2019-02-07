import React, { Component} from 'react';
import { connect } from 'react-redux';

class UserItems extends Component {
    componentDidMount(){
        this.getCount();
    }
    getCount = () => {
        this.props.dispatch({type: 'FETCH_COUNT'})
    }
    

    mapUsers = () => {
        return(
            this.props.users.map((user, i) => {
                return (
                     <li key={i} > {user.username} {user.count} </li>
                )
            })
        )
    }

    render () {
        return (
            <div>
                <ul>
                    {this.mapUsers()}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    users: state.shelfReducer.itemCount
});

export default connect(mapStateToProps)(UserItems);