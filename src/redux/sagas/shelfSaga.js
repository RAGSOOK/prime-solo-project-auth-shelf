import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* postItem(action) {
    try {
        yield axios.post('/api/shelf', action.payload);
        // const nextAction = { type: 'GET_ITEMS' };
        // yield put(nextAction);
    } catch (error) {
        console.log('Error is Shelf POST', error);
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
  yield takeEvery('FETCH_COUNT', userItems)
}

export default shelfSaga;
