import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { type } from 'os';

function* postItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload);
        // const nextAction = { type: 'GET_ITEMS' };
        // yield put(nextAction);
    } catch (error) {
        console.log('Error is Shelf POST', error);
    }
}

function* getItem(){
    try{
        const response = yield axios.get('/api/shelf');

        
         yield put({type: 'GET_SHELF'})
         
        
    }catch (error) {
        console.log('Saga Shelf get request failed', error);
    } 
}
    
function* userItems() {
    try {
        const response = yield axios.get('api/shelf/count');
        yield put({type: 'POST_COUNT', payload: response.data});
    } catch (error) {
        console.log('Error in Count GET', error);
        alert('something went wrong');
    }
}

function* shelfSaga() {
  yield takeEvery('SEND_ITEM', postItem);
  yield takeEvery('GET_SHELF', getItem);
  yield takeEvery('FETCH_COUNT', userItems)
}

export default shelfSaga;
