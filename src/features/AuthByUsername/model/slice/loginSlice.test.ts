import { AnyAction } from '@reduxjs/toolkit';
import { loginActions, loginReducer } from './loginSlice';

describe('login reducer', () => {
    it('should return the initial state', () => {
        expect(loginReducer(undefined, {} as AnyAction)).toEqual({
            username: '',
            password: '',
            isLoading: false,
        });
    });

    it('should handle setUsername', () => {
        const previousState = {
            username: '',
            password: '',
            isLoading: false,
        };

        const username = 'testuser';

        const action = loginActions.setUsername(username);
        const expectedState = {
            username,
            password: '',
            isLoading: false,
        };

        expect(loginReducer(previousState, action)).toEqual(expectedState);
    });

    it('should handle setPassword', () => {
        const previousState = {
            username: '',
            password: '',
            isLoading: false,
        };

        const password = 'testpassword';

        const action = loginActions.setPassword(password);
        const expectedState = {
            username: '',
            password,
            isLoading: false,
        };

        expect(loginReducer(previousState, action)).toEqual(expectedState);
    });
});
