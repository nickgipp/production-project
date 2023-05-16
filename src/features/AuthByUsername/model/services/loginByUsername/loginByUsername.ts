import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async ({ username, password }, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI;
    try {
        const response = await extra.api.post<User>('http://localhost:8000/login', {
            username,
            password,
        });
        if (!response.data) {
            throw new Error();
        }

        // TODO: Урать логигу с localStorage в отдельно место
        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));

        dispatch(userActions.setAuthData(response.data));

        return response.data;
    } catch (error) {
        console.log(error);
        return rejectWithValue('error');
    }
});
