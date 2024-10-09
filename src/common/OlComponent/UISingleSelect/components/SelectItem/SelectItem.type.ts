export interface ISelectItemProps {
    item: any;
    bindLabel: string;
    bindValue: string;
    isSelected?: boolean;
    onClick?: (item: any) => void;
}