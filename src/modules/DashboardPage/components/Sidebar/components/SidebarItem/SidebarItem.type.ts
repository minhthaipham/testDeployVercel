export interface ISidebarItem {
    tag: any;
    route: string;
    isActived: boolean;
    title: string;
    subMenuRouter?: string[];
    subOfSubMenuRouter?: string[];
}