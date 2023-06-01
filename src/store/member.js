import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";

const API_URL = 'http://192.168.0.44:8080'

let member = createSlice({
    name: 'member',
    initialState: {login:0},
    reducers: {
        login(state, action) {
            axios({
                method: 'post',
                url: `${API_URL}/api/v1/members/login`,
                data: {
                    email: action.payload.email,
                    password: action.payload.password
                }
            }).then((e) => {
                console.log(e)
            }).catch((error) => {
                console.log(error)
                let response = error.response
                state.login = 0;
                state.errorMessage = '에러임ㅋ'
            })
        }
    }
})


export let {login} = member.actions;
export default member;