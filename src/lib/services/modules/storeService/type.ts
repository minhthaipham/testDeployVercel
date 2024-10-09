import { IMenuItem } from "@/common/types/menuItem";
import { IMenuType } from "@/common/types/menuType";
import { BasicResponse } from "@/common/types/response";

export interface IGetMenuTypeListParams {
    stores_branch_id: string;
    store_id: string;
}

export interface IGetMenuItemListParams {
    menu_type_id: string;
}

export interface IMenuTypeResponse extends BasicResponse<IMenuType[]> {}
export interface IMenuItemResponse extends BasicResponse<IMenuItem[]> {}