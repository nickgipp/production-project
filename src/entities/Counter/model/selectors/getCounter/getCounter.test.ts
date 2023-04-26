import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounter } from './getCounter';

describe('getCounter', () => {
    it('should return the counter value from state', () => {
        const state: DeepPartial<StateSchema> = { counter: { value: 5 } };
        const result = getCounter(state as StateSchema);
        expect(result).toEqual({ value: 5 });
    });

    it('should return undefined when state is null', () => {
        const state = null;
        const result = getCounter(state);
        expect(result).toBeUndefined();
    });

    it('should return undefined when state is undefined', () => {
        const state = undefined;
        const result = getCounter(state);
        expect(result).toBeUndefined();
    });
});
