import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import TokenService from '@/common/utils/tokenService';
import { RootState } from './store';
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_URL}`,
  prepareHeaders: (headers, { getState, endpoint }) => {
    const token = TokenService.getToken() as { accessToken: string } | null;
    headers.set('current-version', '1.00');
    headers.set('client-type', 'web');
    headers.set('Content-Type', 'application/json');
    if (token?.accessToken) {
      headers.set('Authorization', `Bearer ${token.accessToken}`);
    }
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  try {
    let result = await baseQuery(args, api, extraOptions);
    if (result.error && result.error.status === 401) {
      TokenService.setToken('');
    }
    return result;
  } catch (error: any) {
    return error;
  }
};
function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE
}
export const api = createApi({
  baseQuery: baseQueryWithInterceptor,
  extractRehydrationInfo(action, { reducerPath }): any {
    if (isHydrateAction(action)) {
      return action.payload[api.reducerPath]
    }
  },
  endpoints: () => ({}),
});
