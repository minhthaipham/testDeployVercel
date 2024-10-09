'use client';
import { BellOutline, HelpOutline, SearchOutline } from '@/assets/svgs';
import AdnTextField from '@/common/OlComponent/AdnTextField/AdnTextField';
import { ESize } from '@/common/OlComponent/Helpers/Adnsize.enum';
import { IUser } from '@/common/types';
import { IUserState } from '@/lib/features/userSlice/type';
import { RootState, useAppSelector, wrapper } from '@/lib/services/store';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
const Navbar: React.FC = () => {
  const userState = useAppSelector<RootState, IUserState>(
    (state) => state.user
  );
  const user = userState.user;
  const pathname = usePathname();

  return (
    <div className="p-2 bg-gray-50 flex items-center justify-between">
      <div>
        <a href="/">
          <span className="text-bgPrimarySolidDefault text-xl font-semibold">
            {pathname === '/dashboard/story' ? 'Space' : 'Dashboard'}
          </span>
        </a>
      </div>
      {pathname !== '/dashboard/story' && (
        <div className="flex gap-4 items-center">
          <AdnTextField
            placeholder="Search"
            leftIcon={<SearchOutline className="w-5 h-5" />}
            textFieldSize={ESize.XS}
          />
          <span className="line-clamp-1">
            {user?.userProfile.firstName} {user?.userProfile.lastName}
          </span>
          <BellOutline className="w-8 h-8 hover:text-bgPrimarySolidHover cursor-pointer" />
          <HelpOutline className="w-8 h-8 hover:text-bgPrimarySolidHover cursor-pointer" />
          <div className="min-w-[24px] h-[24px] bg-bgPrimaryTonalHover rounded-full overflow-hidden">
            <Image
              src="https://genshin.global/wp-content/uploads/2023/09/birthday-art-genshinimpact-ayaka.jpg"
              width={24}
              height={24}
              alt="avatar"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (context) => {
    const userState = store.getState().user;
    return {
      props: {
        user: userState,
      },
    };
  });
