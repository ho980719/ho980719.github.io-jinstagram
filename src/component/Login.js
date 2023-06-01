import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {login} from "../store/member";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

let Login = ({member}) => {
    let errorMessage = useSelector((state) => {return state.errorMessage})
    let dispatch = useDispatch();
    return (
        <>
            <Form style={{padding: '50px'}}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <div style={{width:'100%', height:'30px'}}>
                    <Form.Text className="text-danger">{member.errorMessage}</Form.Text>
                </div>
                <Button variant="primary w-100 mt-4" type="button" onClick={() => {
                    dispatch(login({
                        email: document.getElementById('email').value,
                        password: document.getElementById('password').value
                    }));
                }}>Login</Button>
                <Button variant="primary w-100 mt-4" type="button" onClick={() => {
                    console.log(member.errorMessage)
                }}>Login</Button>
            </Form>
        </>
    );
}

export default Login;