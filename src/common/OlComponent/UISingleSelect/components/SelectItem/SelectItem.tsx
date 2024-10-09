// import { CheckSolid } from "@/assets/svgs";
import { ISelectItemProps } from './SelectItem.type';

const SelectItem: React.FC<ISelectItemProps> = (props) => {
  const {
    item: option,
    bindLabel,
    isSelected = false,
    onClick,
    bindValue,
  } = props;
  return (
    <div
      className={`py-[14px] px-4 xl:md:py-3 xl:md:px-4 hover:bg-bgNeutralTonalHover cursor-pointer border-b border-borderNeutralLight flex justify-between`}
      onClick={() => onClick?.(option)}
    >
      <span className="whitespace-nowrap overflow-hidden text-xs xl:md:text-[20px] text-ellipsis">
        {option[bindLabel]}
      </span>
      {/* {isSelected && <CheckSolid className="text-bgPrimarySolidFocus" />} */}
    </div>
  );
};

export default SelectItem;
