import { createAction, handleActions } from 'redux-actions';
import {call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    isRegitered: false
}

const PROFILE_REQUEST = 'auth/PROFILE_REQUEST';
const PROFILE_SUCCESS = 'auth/PROFILE_SUCCESS';
const PROFILE_FAILURE = 'auth/PROFILE_FAILURE';

export const profilerequest= createAction(PROFILE_REQUEST, data => data)
//export const unregisterRequest = createAction(UNREGISTER_REQUEST, data => data)

export function* profileSaga() {
    yield takeLatest(PROFILE_REQUEST, profile);
   // yield takeLatest(UNREGISTER_REQUEST, membershipWithdrawal);
}

function* profile(action) {
    try{
        console.log("*** 여기가 핵심 ***"+JSON.stringify(action))
        const response = yield call(profileAPI, action.payload)
        console.log("회원가입 서버 다녀옴:" +JSON.stringify(response.data))
        yield put({type: REGISTER_SUCCESS, payload: response.data})
        //yield put(window.location.href="/auth/login")
    } catch (error){
        yield put({type: REGISTER_FAILURE, payload:error.message})
    }
}

const profileAPI = payload => axios.post(
    `${SERVER}/user/profile`,
    payload,
    {headers}
)


const profile = handleActions({
    [HYDRATE] : (state, action) => ({
        ...state, ...action.payload
    })
}, initialState)

export default profile