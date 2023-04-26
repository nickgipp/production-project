import { counterReducer, counterActions } from './counterSlice';

describe('counter reducer', () => {
    it('should handle initial state', () => {
        expect(counterReducer(undefined, counterActions.increment())).toEqual({
            value: 1,
        });
    });

    it('should handle increment', () => {
        const actual = counterReducer({ value: 0 }, counterActions.increment());
        expect(actual.value).toEqual(1);
    });

    it('should handle decrement', () => {
        const actual = counterReducer({ value: 1 }, counterActions.decrement());
        expect(actual.value).toEqual(0);
    });
});
