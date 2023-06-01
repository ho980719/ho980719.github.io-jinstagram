import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useDispatch} from "react-redux";
import {login} from "../store/member";

let Login = ({member}) => {

    let dispatch = useDispatch();
    return (
        <>
            <div>로그인하세요</div>
            <input type='text' id={'email'} name={'email'}/><br/>
            <input type='text' id={'password'} name={'password'}/>
            <button className={'btn-primary'} onClick={() => {
                dispatch(login({
                    email: document.getElementById('email').value,
                    password: document.getElementById('password').value
                }));
            }
            }>로그인
            </button>
        </>
    );
}

export default Login;