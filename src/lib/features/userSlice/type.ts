import { IUser, IUserAdmin } from "@/common/types";

export interface IUserState {
    user?: IUser;
    listUser: IUserAdmin[];
}