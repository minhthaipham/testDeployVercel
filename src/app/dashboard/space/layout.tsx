'use client';
import { BookOutline, UserOutline } from '@/assets/svgs';
import SidebarItem from '@/modules/DashboardPage/components/Sidebar/components/SidebarItem/SidebarItem';
import { ISidebarItem } from '@/modules/DashboardPage/components/Sidebar/components/SidebarItem/SidebarItem.type';
import { EDashboardPage, ESpacePage } from '@/router';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

interface ILayoutSpaceProps {
  children: React.ReactNode;
}
const classMenu = 'w-full h-full';
const ListSidebarItems: ISidebarItem[] = [
  {
    route: ESpacePage.STORY,
    tag: <BookOutline className={classMenu} />,
    title: 'Story',
    isActived: true,
  },
];
export default function LayoutSpace({ children }: ILayoutSpaceProps) {
  const [listSidebar] = React.useState<ISidebarItem[]>(ListSidebarItems);
  const pathname = usePathname();
  const router = useRouter();

  const handleSidebarItem = (sidebarItem: ISidebarItem) => {
    if (!sidebarItem.isActived) return;
    router.push(sidebarItem.route);
  };
  return (
    <div className="h-full w-full flex border-l-[1px] ">
      <div className="border-bgPrimarySolidDefault bg-gray-50">
        {listSidebar.map((item, index) => {
          return (
            <div key={index} onClick={() => handleSidebarItem(item)}>
              <SidebarItem {...item} isActived={pathname === item.route} />
            </div>
          );
        })}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
