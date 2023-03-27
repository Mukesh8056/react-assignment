import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { history, fetchWrapper } from '_helpers';

// create slice

const name = 'auth';
const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();
const extraReducers = createExtraReducers();
const slice = createSlice({ name, initialState, reducers, extraReducers });

// exports

export const authActions = { ...slice.actions, ...extraActions };
export const authReducer = slice.reducer;

// implementation

function createInitialState() {
    return {
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        error: null
    }
}

function createReducers() {
    return {
        logout
    };

    function logout(state) {
        state.user = null;
        localStorage.removeItem('user');
        history.navigate('/login');
    }
}

function createExtraActions() {
    const baseUrl = `${process.env.REACT_APP_API_URL}/users`;

    return {
        login: login()
    };    

    function login() {
        return createAsyncThunk(
            `${name}/login`,
            
            async ({ username, password }) => {console.log(username,password)
                try{
                    const payload = { email:username, password }
                    console.log(payload)
                    const headers={
                        'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2M2M2YzI5ZmFmYTVkMTAwMWRlNDkwZjYiLCJpYXQiOjE2Nzk0Mjg5MzAsImV4cCI6MzQ3OTQyODkzMCwidHlwZSI6ImFjY2VzcyJ9.3GZU2CjalRjcOHRhqm-WCvCdWaHoD5Js32VvqO2j2uY'
                      }
             const data=   await axios.post(`https://interview-api.onrender.com/v1/auth/login`,payload,headers)
             
            console.log(data)
        return data}
        catch(err){
 console.log(err)
        }
    }
        );
    }
}

function createExtraReducers() {
    return {
        ...login()
    };

    function login() {
        var { pending, fulfilled, rejected } = extraActions.login;
        return {
            [pending]: (state) => {
                console.log("hi")
                state.error = null;
            },
            [fulfilled]: (state, action) => {
                console.log(action)
                const user = action.payload;
                
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                state.user = user;
                console.log(user)
                // localStorage.setItem(isEmailVerified,)

                // get return url from location state or default to home page
                const { from } = history.location.state || { from: { pathname: '/' } };
                history.navigate(from);
            },
            [rejected]: (state, action) => {
                state.error = action.error;
            }
        };
    }
}
