/* eslint-disable i18next/no-literal-string */
import cl from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';
import styles from './Counter.module.scss';

interface CounterProps {
    className?: string;
}

export const Counter: React.FC<CounterProps> = (props) => {
    const { className } = props;

    const despatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const inc = () => {
        despatch(counterActions.increment());
    };
    const dec = () => {
        despatch(counterActions.decrement());
    };

    return (
        <div className={cl(styles.counter, className)}>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="inc-btn" onClick={inc}>inc</Button>
            <Button data-testid="dec-btn" onClick={dec}>dec</Button>
        </div>
    );
};
