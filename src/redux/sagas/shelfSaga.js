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

function* shelfSaga() {
  yield takeEvery('SEND_ITEM', postItem);
}

export default shelfSaga;
