import cl from 'classnames';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Button } from 'shared/ui';
import { ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Text } from 'shared/ui/Text/Text';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={cl(styles.profileCard, className)}>
            <div className={cl(styles.header, className)}>
                <Text title={t('Profile')} />

                <Button theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
            </div>
            <div>
                <Input value={data && data?.first} />
                <Input value={data && data?.lastname} />
            </div>
        </div>
    );
};
