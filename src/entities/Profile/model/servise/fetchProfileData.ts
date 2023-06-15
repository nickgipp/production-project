import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue, dispatch } = thunkAPI;
        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (error) {
            console.log(error);
            return rejectWithValue('error');
        }
    }
);
