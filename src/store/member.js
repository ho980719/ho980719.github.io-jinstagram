import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'http://192.168.0.44:8080'

let member = createSlice({
    name: 'member',
    initialState: null,
    reducers: {
        login(state, action) {
            console.log(action)
            axios({
                method: 'post',
                url: `${API_URL}/api/v1/members/login`,
                data: {
                    email: action.payload.email,
                    password: action.payload.password
                }
            }).then((e) => {
                console.log(e)
            })
        }
    }
})

export let {login} = member.actions;
export default member;