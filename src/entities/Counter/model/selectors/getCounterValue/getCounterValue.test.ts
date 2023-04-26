import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue', () => {
    it('should return the counter value from state', () => {
        const state: DeepPartial<StateSchema> = { counter: { value: 5 } };
        const result = getCounterValue(state as StateSchema);
        expect(result).toEqual(5);
    });

    it('should return undefined when state is null', () => {
        const state = null;
        const result = getCounterValue(state);
        expect(result).toBeUndefined();
    });

    it('should return undefined when state is undefined', () => {
        const state = undefined;
        const result = getCounterValue(state);
        expect(result).toBeUndefined();
    });
});
