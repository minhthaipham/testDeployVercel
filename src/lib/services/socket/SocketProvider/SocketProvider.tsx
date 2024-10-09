'use client';
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import io, { ManagerOptions, SocketOptions, Socket } from 'socket.io-client';

import {
  useSocketReducer,
  State as SocketState,
} from './socketReducer/socketReducer';

type SocketContextValues = {
  readonly socket: Socket;
} & SocketState;

const SocketContext = createContext<SocketContextValues | undefined>(undefined);

type SocketProviderProps = {
  readonly children: ReactNode;
  readonly uri: string;
  readonly config?: Partial<ManagerOptions & SocketOptions>;
};

export const SocketProvider = ({
  children,
  uri,
  config,
}: SocketProviderProps) => {
  const [state, dispatch] = useSocketReducer();
  const [socket, setSocket] = useState<Socket | undefined>(undefined);

  useEffect(() => {
    if(state?.isConnected || typeof window === 'undefined' ) return;
    const newSocket = io(uri, config);

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [uri, config, state]);

  useEffect(() => {
    dispatch({ type: 'connecting' });

    socket?.on('connect', () => {
      dispatch({ type: 'connected' });
    });

    socket?.on('connect_error', ({ message }) => {
      dispatch({
        type: 'error',
        payload: message,
      });
    });

    socket?.on('disconnect', (reason) => {
      dispatch({ type: 'disconnect', payload: reason });
    });

    return () => {
      socket?.off('connect');
      socket?.off('connect_error');
      socket?.off('disconnect');
    };
  }, [dispatch, uri]);
  useEffect(() => {
    if (typeof window !== 'undefined') {
    }
  }, []);
  return (
    <SocketContext.Provider value={{ socket: socket as Socket, ...state }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocket = () => {
  const value = useContext(SocketContext);

  if (!value) {
    throw new Error("SocketContext hasn't been provided");
  }

  return useMemo(() => value, [value]);
};