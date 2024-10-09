export interface ILoginPayload {
    userName: string;
    password: string;
}

export interface ILoginResponse {
    userId: string;
    userName: string;
    email: string;
    token: string;
}