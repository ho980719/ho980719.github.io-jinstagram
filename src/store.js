import {configureStore} from '@reduxjs/toolkit'
import member from "./store/member";

export const store = configureStore({
    reducer: {
        member: member.reducer,
    },
})