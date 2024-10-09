import { twMerge } from "tailwind-merge";
import { ISidebarItem } from "./SidebarItem.type";
import clsx from "clsx";
const SidebarItem: React.FC<ISidebarItem> = (props) => {
    const Tag = props.tag;

    const sidebarItemClassWrapper = twMerge(
        clsx(
            `p-3 hover:bg-bgPrimaryTonalHover cursor-pointer`,
            {
                'bg-bgPrimaryTonalHover': props.isActived,
                '': !props.isActived,
            }
        )
    )
    const sidebarItemClass = twMerge(
        clsx(
            `w-6 h-6 `,
            {
                'text-bgPrimarySolidFocus': props.isActived,
                'text-fgNeutralNormal': !props.isActived,
            },
            'hover:text-bgPrimarySolidFocus'
        )
    )

    return (
            <div className={sidebarItemClassWrapper}>
                <div className={sidebarItemClass}>
                    {Tag}
                </div>
            </div>
    );
};
export default SidebarItem;