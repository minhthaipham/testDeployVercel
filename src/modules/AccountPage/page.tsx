'use client';
import { LtWelcome } from '@/assets/lotties';
import { MoreOutline } from '@/assets/svgs';
import AdnAvatar from '@/common/OlComponent/AdnAvatar/AdnAvatar';
import { ESize } from '@/common/OlComponent/Helpers/Adnsize.enum';
import { IUserAdmin } from '@/common/types';
import { useGetAllUserQuery } from '@/lib/services/modules';
import Lottie from 'lottie-react';
import React, { useEffect } from 'react';

const ListAccountInfo = () => {
  const [isFetchingUser, setIsFetchingUser] = React.useState(true);
  const { isFetching, data } = useGetAllUserQuery({}, { skip: false });

  useEffect(() => {
    if (!isFetching) {
      setIsFetchingUser(false);
    }
  }, [isFetching]);

  return (
    <div>
      <div>
        <span className="text-xl text-bgPrimarySolidFocus">
          User Management
        </span>
      </div>
      <div className="flex flex-wrap gap-16 px-4">
        {isFetchingUser ? (
          <div className="flex-1 flex flex-col gap-2 items-center justify-center">
            <Lottie
              animationData={LtWelcome}
              className="flex justify-center items-center h-full cursor-pointer hover:scale-110 duration-300"
              loop={true}
            />
          </div>
        ) : (
          data?.map((user: IUserAdmin) => (
            <div className="shadow-xl bg-white p-4">
              <div className="flex gap-6">
                <AdnAvatar
                  src={
                    user.userProfile.userAvatar
                      ? user.userProfile.userAvatar.mediaLink
                      : 'https://i.pinimg.com/736x/19/47/e4/1947e4946f584212023a0948289579de.jpg'
                  }
                  alt="avatar"
                  size={ESize.XL}
                />
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-fgNeutralHighEmphasis">
                    {user.userProfile.firstName} {user.userProfile.lastName}
                  </span>
                  <span className="text-fgNeutralNormal">{user.email}</span>
                </div>
                <div>
                  <MoreOutline />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListAccountInfo;
