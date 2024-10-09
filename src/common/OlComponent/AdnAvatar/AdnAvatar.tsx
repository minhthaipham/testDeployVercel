import React from 'react';
import { IAdnAvatarProps } from './AdnAvatar.type';
import { EShape } from './AdnAvatar.until';
import { ESize } from '../Helpers/Adnsize.enum';
import { twMerge } from 'tailwind-merge';
const AdnAvatar: React.FC<IAdnAvatarProps> = (props) => {
  const {
    shape = EShape.CIRCLE,
    src,
    alt,
    size = ESize.M,
    className,
    ...rest
  } = props;

  const sizeAvatarClass = {
    [ESize.S]: 'w-[24px] h-[24px]',
    [ESize.M]: 'w-[40px] h-[40px]',
    [ESize.L]: 'w-[56px] h-[56px]',
    [ESize.XL]: 'w-[72px] h-[72px]',
  }[size];

  const shapeAvatarClass = {
    [EShape.CIRCLE]: 'rounded-full',
    [EShape.SQUARE]: 'rounded-lg',
  }[shape];

  const avatarClass = twMerge(
    `object-cover`,
    sizeAvatarClass,
    shapeAvatarClass,
    className
  );

  return <img src={src} alt={alt} className={avatarClass} {...rest} />;
};

export default AdnAvatar;
