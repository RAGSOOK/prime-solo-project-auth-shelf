const shelfReducer = (state = [], action) => {
  switch(action.type){
    case 'GET_SHELF':
    return action.payload;
  }
    return state;

  };
  

  export default shelfReducer;