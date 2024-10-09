import { api } from "../../api";

export const storyApi = api.injectEndpoints({
    endpoints: (build) => ({
        getAllCategories: build.query({
            query: () => ({
                url: '/categories',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetAllCategoriesQuery } = storyApi;