import { RoutePath } from 'app/config/routeConfig/routeConfig';
import MainPageIcon from 'shared/assets/Icons/MainPageIcon.svg';
import AboutPageIcon from 'shared/assets/Icons/AboutPageIcon.svg';
import ProfilePageIcon from 'shared/assets/Icons/ProfilePageIcon.svg';

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
