'use client';
import React, { Fragment } from 'react';
import SidebarItem from './components/SidebarItem/SidebarItem';
import { ISidebarItem } from './components/SidebarItem/SidebarItem.type';
import {
  AnalyzeOutline,
  PowerOutline,
  SettingOutline,
  SexOutline,
  SpaceOutline,
  UserOutline,
} from '@/assets/svgs';
import { usePathname, useRouter } from 'next/navigation';
import { EDashboardPage, ESpacePage } from '@/router';
import { useDispatch } from 'react-redux';
import { logout } from '@/lib/features/authSlice';
const classMenu = 'w-full h-full';
const ListSidebarItems: ISidebarItem[] = [
  {
    route: EDashboardPage.HOME,
    tag: <AnalyzeOutline className={classMenu} />,
    title: 'Home',
    isActived: true,
  },
  {
    route: EDashboardPage.ACCOUNT,
    tag: <UserOutline className={classMenu} />,
    title: 'Account',
    isActived: true,
  },
  {
    route: EDashboardPage.SPACE,
    tag: <SpaceOutline className={classMenu} />,
    title: 'Space',
    isActived: true,
    subMenuRouter: [ESpacePage.STORY],
    subOfSubMenuRouter: [ESpacePage.CATEGORY],
  },
];

const SettingItem: ISidebarItem = {
  route: EDashboardPage.SETTING,
  tag: <SettingOutline className={classMenu} />,
  title: 'Setting',
  isActived: true,
};

const PowerItem: ISidebarItem = {
  route: '/logout',
  tag: <PowerOutline className={classMenu} />,
  title: 'Logout',
  isActived: true,
};

const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const [listSidebar] = React.useState<ISidebarItem[]>(ListSidebarItems);

  const handleSidebarItem = (sidebarItem: ISidebarItem) => {
    if (!sidebarItem.isActived) return;
    router.push(sidebarItem.route);
  };

  const handleLogout = () => {
    dispatch(logout());
    router.push('/auth/login');
  };

  return (
    <div className="bg-gray-50  flex flex-col justify-between">
      <div>
        {listSidebar.map((item, index) => {
          return (
            <div key={index} onClick={() => handleSidebarItem(item)}>
              <SidebarItem
                {...item}
                isActived={
                  pathname === item.route ||
                  item.subMenuRouter?.includes(pathname) ||
                  item.subOfSubMenuRouter?.includes(pathname) ||
                  false
                }
              />
            </div>
          );
        })}
      </div>
      <div className="gap-3">
        <div onClick={() => handleSidebarItem(SettingItem)}>
          <SidebarItem
            {...SettingItem}
            isActived={pathname === SettingItem.route}
          />
        </div>
        <div onClick={handleLogout}>
          <SidebarItem {...PowerItem} isActived={false} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
