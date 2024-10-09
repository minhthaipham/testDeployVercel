'use client';
import { IAuthState } from '@/lib/features/authSlice/type';
import { RootState, wrapper } from '@/lib/services/store';
import { useSelector } from 'react-redux';
import { useGetCurrentUserQuery, userApi } from '@/lib/services/modules';
import React, { useEffect } from 'react';
import Lottie from 'lottie-react';
import { LtWelcome } from '@/assets/lotties';

interface IInnerAppProps {
  children: React.ReactNode;
  initialUserData?: any;
}

const InnerApp = ({ children, initialUserData }: IInnerAppProps) => {
  const authState = useSelector<RootState, IAuthState>((state) => state.auth);
  const isSignedIn = Boolean(
    authState.token.accessToken != '' || authState.isAuthenticated
  );
  const { isFetching } = useGetCurrentUserQuery(
    {},
    {
      skip: !isSignedIn || initialUserData,
    }
  );
  const [isFetchingUser, setIsFetchingUser] = React.useState(true);
  useEffect(() => {
    if (!isFetching) {
      setIsFetchingUser(false);
    }
  }, [isFetching]);
  return (
    <div>
      {isFetchingUser ? (
        <div className="flex-1 flex flex-col gap-2 items-center justify-center">
          <Lottie
            animationData={LtWelcome}
            className="flex justify-center items-center h-full cursor-pointer hover:scale-110 duration-300"
            loop={true}
          />
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default InnerApp;
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const result = await store.dispatch(
      userApi.endpoints.getCurrentUser.initiate(undefined)
    );
    await Promise.all(store.dispatch(userApi.util.getRunningQueriesThunk()));
    return {
      props: {
        initialUserData: result.data,
      },
    };
  }
);
