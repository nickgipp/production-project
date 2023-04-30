import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username,
                password,
            });
            if (!response.data) {
                throw new Error();
            }

            // TODO: Урать логигу с localStorage в отдельно место
            localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

            thunkAPI.dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('error');
        }
    }
);
