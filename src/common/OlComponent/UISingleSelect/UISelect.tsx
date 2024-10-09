import { twMerge } from 'tailwind-merge';
// import { ESize } from "../helpers/UISize.enum";
import { ESelectMode, IUISelectProps } from './UISelect.type';
import clsx from 'clsx';
// import { ChevronDownSolid, ChevronDownSolidV2 } from '@/assets/svgs';
import { Fragment, useEffect, useRef, useState } from 'react';
import SelectItem from './components/SelectItem/SelectItem';
import { ESize } from '../Helpers/UISize.enum';

const UISelect: React.FC<IUISelectProps> = (props) => {
  const {
    size = ESize.XXL,
    title,
    isInvalid,
    options = [],
    bindLabel = 'label',
    bindValue = 'value',
    mode = ESelectMode.SINGLE,
    onChange,
    value,
  } = props;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const selectSizeClass = {
    [ESize.XS]: 'px-[4px] py-[4px]',
    [ESize.S]: 'px-[6px] py-[7px]',
    [ESize.M]: 'px-[8px] py-[12px]',
    [ESize.L]: 'px-[10px] py-[12px]',
    [ESize.XL]: 'px-[12px] py-[12px]',
    [ESize.XXL]: 'px-[15px] xl:md:py-[24px] py-[15px]',
  }[size];

  const resolveStateFactory = {
    default: 'bg-white border-borderNeutralLight',
    active: 'bg-bgBase border-black',
    error: 'bg-bgBase border-borderDanger',
    disabled: 'bg-bgNeutralDisable border-transparent',
  };

  const selectWrapperStyle = twMerge(
    clsx(
      'w-full cursor-pointer gap-2 flex item-center inline-flex justify-center border-[1.5px] focus:outline-none focus:ring-1 rounded-[10px] shadow-sm relative transition-all duration-300',
      selectSizeClass,
      resolveStateFactory.default,
      isInvalid && resolveStateFactory.error
    )
  );

  const renderItemSelected = () => {
    if (mode === ESelectMode.SINGLE) {
      return (
        <span className="whitespace-nowrap text-xs xl:md:text-[20px] overflow-hidden text-ellipsis">
          {options?.find((option) => option[bindValue] === value[bindValue])?.[
            bindLabel
          ] ||
            title ||
            ''}
        </span>
      );
    }
    if (mode === ESelectMode.MULTIPLE) {
      return (
        options
          ?.filter((option) => value?.includes(option[bindValue]))
          .map((option) => option[bindLabel])
          .join(', ') ||
        title ||
        ''
      );
    }
  };

  const checkIsSelected = (option: any) => {
    if (mode === ESelectMode.SINGLE) {
      return option[bindValue] === value[bindValue];
    }
    if (mode === ESelectMode.MULTIPLE) {
      return value?.includes(option[bindValue]);
    }
    return false;
  };

  const handleSelect = (option: any) => {
    if (mode === ESelectMode.SINGLE) {
      onChange?.(option[bindValue]);
      setIsCollapsed(false);
    }
    if (mode === ESelectMode.MULTIPLE) {
      const selectedValues = value?.includes(option[bindValue])
        ? value?.filter((val: any) => val !== option[bindValue])
        : [...value, option[bindValue]];
      onChange?.(selectedValues);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCollapsed(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={selectWrapperStyle} ref={dropdownRef}>
      <div
        className="flex w-full z-20"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div className="flex flex-1 overflow-hidden">
          {renderItemSelected()}
        </div>
        <div
          className={`flex items-center justify-center transform ${!isCollapsed ? 'rotate-0' : 'rotate-180'}`}
        >
          {/* <ChevronDownSolidV2 className="text-black xl:w-5 xl:h-5 w-[10px] h-[10px]" /> */}
        </div>
      </div>
      <div
        className={`absolute w-full shadow-2xl bg-white rounded-[10px] overflow-hidden z-10  overflow-y-auto mt-1 top-full transition-all duration-200 ease-in-out transform 
                ${!isCollapsed ? 'opacity-0 -translate-y-4 z-10 hidden' : 'opacity-100 translate-y-0 z-30 block'}`}
      >
        {options.map((option, index) => (
          <Fragment key={index}>
            <SelectItem
              bindLabel={bindLabel}
              bindValue={bindValue}
              item={option}
              isSelected={checkIsSelected(option)}
              onClick={() => handleSelect(option)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};
export { UISelect };
