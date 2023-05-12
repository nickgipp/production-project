import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    it('should return loginForm from state', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'testuser',
                password: 'testpassword',
            },
        };
        expect(getLoginState(state as StateSchema)).toEqual({
            username: 'testuser',
            password: 'testpassword',
        });
    });

    it('should return undefined when loginForm is not in state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toBeUndefined();
    });

    it('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginState(state as StateSchema).error).toEqual('error');
    });
});
