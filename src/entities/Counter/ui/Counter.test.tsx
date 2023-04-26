import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Counter } from './Counter';
import { counterActions } from '../model/slice/counterSlice';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

describe('Counter', () => {
    it('render', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });

    it('increment', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('inc-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    it('decrement', () => {
        componentRender(<Counter />, { initialState: { counter: { value: 10 } } });
        fireEvent.click(screen.getByTestId('dec-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
