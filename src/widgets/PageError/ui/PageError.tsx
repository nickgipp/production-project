import cl from 'classnames';
import styles from './PageError.module.scss';
import { useErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';

export function PageError({ error }) {
    const { resetBoundary } = useErrorBoundary();
    const { t } = useTranslation();

    const reset = () => {
        location.reload();
        resetBoundary();
    };

    return (
        <div role="alert" className={styles.pageError}>
            <p>{t('Something went wrong:')}</p>
            <pre style={{ color: 'red' }}>{error.message}</pre>
            <button onClick={reset}>{t('Try again')}</button>
        </div>
    );
}
