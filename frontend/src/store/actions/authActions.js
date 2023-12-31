import axios from "axios";
import { baseURL } from "../../api";
import { toast } from 'react-toastify'

export const signUp = (user) => {
    return (dispatch) => {
        axios
            .post(baseURL + 'signup', user)
            .then(token => {
                localStorage.setItem('token', token.data)

                dispatch({
                    type: 'SIGN_UP',
                    token: token.data
                });
            })
            .catch((error) => {
                console.log(error.response);

                toast.error(error.respone?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            });
    };
}
export const signIn = (creds) => {
    return (dispatch) => {
        axios
            .post(baseURL + 'signin', creds)
            .then(token => {
                localStorage.setItem('token', token.data)

                dispatch({
                    type: 'SIGN_IN',
                    token: token.data
                });
            })
            .catch((error) => {
                console.log(error.response);

                toast.error(error.respone?.data, {
                    position: toast.POSITION.BOTTOM_RIGHT
                })
            });
    };
}

export const loadUser = () => {
    return (dispatch, getState) => {
        const token = getState().auth.token
        if(token){
            dispatch({
                type: 'USER_LOADED',
                token 
            })
        } else return null
    }
}


export const signOut = () => {
    return (dispatch) => {
        dispatch({ 
            type: 'SIGN_OUT'
        })
    }
}