import cl from 'classnames';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui';

interface BugButtonProps {
    className?: string;
}

export const BugButton: React.FC<BugButtonProps> = (props) => {
    const { className } = props;
    const [error, setError] = useState(false);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={() => setError(true)} className={cl(className)}>
            Bug
        </Button>
    );
};
