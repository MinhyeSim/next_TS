import React, {useState} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginCancelled, logoutRequest } from '@/modules/auth/login';
import { Login } from '@/conponents/auth/Login';
import { useRouter } from 'next/router';
import { Profile } from '../../conponents';

const LoginPage = () => {

  const[user, setUser] = useState({userid:'', password:''})
  const dispatch = useDispatch()
  const router = useRouter()
  const {isLoggined, loginUser} = useSelector(state => state.login)

  const onChange = e =>{
      e.preventDefault()
      const{name, value} = e.target;
      setUser({...user,[name]: value})
  }
  const onSubmit = e => {
      e.preventDefault()
      alert('로그인 확인:'+JSON.stringify(user))
      console.log(history)
      dispatch(loginRequest(user))
      //router.push('/user/profile') 이동식 데이터 소실
  }
 
  return (
    isLoggined 
    ? <Profile loginUser={loginUser}/>
    :<Login onChange={onChange} onSubmit={onSubmit}/>);
};

const mapStateToProps = state => ({isLoggined: state.login.isLoggined})
const loginActions = {loginRequest, loginCancelled, logoutRequest}
export default connect(mapStateToProps, loginActions)(LoginPage);