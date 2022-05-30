import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
//import counter, { watchCounter } from '@/pages/basic/counter';
import login, { loginSaga } from './auth/login';
import register,{ registerSaga } from './auth/register';
import { HYDRATE } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log("HYDRATE", action);
            return { ...state, ...action.payload };
        default:
            return state;
    }
  },
  login,
  register,
});

export function* rootSaga() {
  yield all([registerSaga(), loginSaga()]);
}

export default rootReducer;