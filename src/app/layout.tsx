import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import StoreProvider from '@/lib/Provider/StoreProvider';
import InnerApp from '@/common/InnerApp/InnerApp';
import { SocketProvider } from '@/lib/services/socket';
import { ManagerOptions, SocketOptions } from 'socket.io-client';
import { useEffect } from 'react';
import { cookies } from 'next/headers';
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '@/lib/features/authSlice';
import TokenService from '@/common/utils/tokenService';
import { persistor, RootState, wrapper } from '@/lib/services/store';
import { IAuthState } from '@/lib/features/authSlice/type';
import { PersistGate } from 'redux-persist/integration/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Parallel galaxy dashboard',
  description: 'Parallel galaxy dashboard for managing your devices and data',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const webSocketUrl = process.env.NEXT_WEBSOCKET_URL ? process.env.NEXT_WEBSOCKET_URL : '';
  const config: Partial<ManagerOptions & SocketOptions> = {
    auth: {
      token: '8b0eed51-c6bd-4bc9-a5fd-1c08340ab5b8',
    },
    transports: ['websocket'],
    autoConnect: true,
    reconnection: true,
    reconnectionAttempts: 3,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 5000,
    randomizationFactor: 0.5,
  };
  return (
    <html lang="en">
      <StoreProvider>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          {/* <SocketProvider uri={webSocketUrl} config={config}> */}
          <body className={inter.className}>
            <div className='bg-white h-screen w-screen text-fgNeutralEmphasis'>
              <InnerApp>
                {children}
              </InnerApp>
            </div>
          </body>
          {/* </SocketProvider> */}
        {/* </PersistGate> */}
      </StoreProvider>
    </html>
  );
}
