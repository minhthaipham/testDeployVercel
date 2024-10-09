import { api } from "../../api";
import { ILoginPayload, ILoginResponse } from "./type";

export const authApi = api.injectEndpoints({
    endpoints: (build) => ({
        login: build.mutation<ILoginResponse, ILoginPayload>({
            query: (body) => ({
                url: '/auth/login',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginMutation } = authApi;