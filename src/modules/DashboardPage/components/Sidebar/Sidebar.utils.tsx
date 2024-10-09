import { ISidebarItem } from "./components/SidebarItem/SidebarItem.type";
import { MenuSolid } from "@/assets/svgs";
const ListSidebarItems: ISidebarItem[] = [
    {
        route: '/',
        tag: <MenuSolid />,
        title: 'Home',
        isActived: false,
    },
    {
        route: '/dashboard/account',
        tag: <MenuSolid />,
        title: 'Account',
        isActived: false,
    },
];

export { ListSidebarItems };