import { classNames } from './classNames';

describe('classNames', () => {
    test('should return single class name if no mods or additional classes are provided', () => {
        const result = classNames('class1');
        expect(result).toEqual('class1');
    });

    test('should concatenate class name with additional classes if provided', () => {
        const result = classNames('class1', {}, ['additional1', 'additional2']);
        expect(result).toEqual('class1 additional1 additional2');
    });

    test('should concatenate class name with all valid mods', () => {
        const mods = {
            mod1: true,
            mod2: false,
            mod3: 'string',
            mod4: '',
            mod5: undefined,
        };
        const result = classNames('class1', mods, ['additional1', 'additional2']);
        expect(result).toEqual('class1 mod1 mod3 additional1 additional2');
    });
});
