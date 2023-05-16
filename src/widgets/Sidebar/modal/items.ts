import { RoutePath } from 'app/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/icons/MainPageIcon.svg';
import AboutPageIcon from 'shared/assets/icons/AboutPageIcon.svg';
import ProfilePageIcon from 'shared/assets/icons/ProfilePageIcon.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Main page',
        Icon: MainPageIcon,
    },
    {
        path: RoutePath.about,
        text: 'About us',
        Icon: AboutPageIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Profile',
        Icon: ProfilePageIcon,
    },
];
