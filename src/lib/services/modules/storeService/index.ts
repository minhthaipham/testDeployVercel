import { api } from '@/lib/services/api';
import {
  IGetMenuItemListParams,
  IGetMenuTypeListParams,
  IMenuItemResponse,
  IMenuTypeResponse,
} from './type';
export const storeApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMenuTypes: build.query<IMenuTypeResponse, IGetMenuTypeListParams>({
      query: (body) => ({
        url:
          '/pykit/app/get-menu-type?store_id=' +
          body.store_id +
          '&store_branch_id=' +
          body.stores_branch_id,
        method: 'GET',
      }),
    }),
    getMenuItems: build.query<IMenuItemResponse, IGetMenuItemListParams>({
      query: (body) => ({
        url: '/pykit/app/get-menu-item?menu_type_id=' + body.menu_type_id,
        method: 'GET',
      }),
    }),
  }),
});

export const { 
  useGetMenuTypesQuery,
  useGetMenuItemsQuery,
} = storeApi;
