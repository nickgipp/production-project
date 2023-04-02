import cl from 'classnames';
import { Loader } from 'shared/ui';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: React.FC<PageLoaderProps> = (props) => {
    const { className } = props;

    return (
        <div className={cl(styles.pageLoader, className)}>
            <Loader />
        </div>
    );
};
