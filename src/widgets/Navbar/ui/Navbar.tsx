
import styles from './Navbar.module.scss'
import cl from 'classnames'
import { AppLink, AppLinkTheme } from 'shared/ui'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={cl(styles.navbar, className)}>
            <div className={cl(styles.links)}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/'}>
                    Главная
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={'/about'}>
                    О сайте
                </AppLink>
            </div>

        </div>
    )
}

