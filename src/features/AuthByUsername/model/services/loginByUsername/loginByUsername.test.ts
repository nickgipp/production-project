import axios from 'axios';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk.ts/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

// describe('loginByUsername', () => {
//     let dispatch: Dispatch;
//     let getState: () => StateSchema;

//     beforeEach(() => {
//         dispatch = jest.fn();
//         getState = jest.fn();
//     });

//     const username = 'TestUser';
//     const password = 'TestPassword';
//     const response = {
//         data: { username: 'TestUser', id: '1' },
//     };

//     it('should return user data if successful', async () => {
//         mockedAxios.post.mockReturnValue(Promise.resolve(response));

//         const action = loginByUsername({ username, password });
//         const result = await action(dispatch, getState, undefined);

//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('fulfilled');
//         expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(response.data));
//         expect(dispatch).toHaveBeenCalledTimes(3);
//     });

//     it('error login', async () => {
//         mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));

//         const action = loginByUsername({ username, password });
//         const result = await action(dispatch, getState, undefined);
//         console.log(result);
//         expect(dispatch).toHaveBeenCalledTimes(2);

//         expect(mockedAxios.post).toHaveBeenCalled();
//         expect(result.meta.requestStatus).toBe('rejected');
//         expect(result.payload).toBe('error');
//     });

// });


describe('loginByUsername', () => {
    const username = 'TestUser';
    const password = 'TestPassword';
    const response = {
        data: { username: 'TestUser', id: '1' },
    };

    it('should return user data if successful', async () => {

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve(response));
        const result = await thunk.callThunk({ username, password });
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(response.data));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    });

    it('error login', async () => {

        const thunk = new TestAsyncThunk(loginByUsername);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({ username, password });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('error');
    });

});



