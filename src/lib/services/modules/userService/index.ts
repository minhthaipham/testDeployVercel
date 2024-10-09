import { api } from '../../api';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCurrentUser: build.query({
      query: () => ({
        url: '/user/current-user',
        method: 'GET',
      }),
    }),
    getAllUser: build.query({
      query: () => ({
        url: '/user/get-all-users',
        method: 'POST',
      }),
    }),
  }),
});

export const { useGetCurrentUserQuery ,
  useGetAllUserQuery
} = userApi;
