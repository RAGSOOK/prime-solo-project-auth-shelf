import { combineReducers } from 'redux';

const shelfReducer = (state = [], action) => {
  switch(action.type){
    case 'SET_SHELF':
    return action.payload;
  }
    return state;

  };

  const itemCount = (state = [], action) => {
    if (action.type === 'POST_COUNT'){
      return action.payload;
    }
    return state;
  };


  
export default combineReducers({
  shelfReducer,
  itemCount
});
