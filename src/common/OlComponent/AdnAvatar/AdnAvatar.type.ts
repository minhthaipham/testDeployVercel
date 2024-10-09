import { ESize } from "../Helpers/Adnsize.enum";
import { EShape } from "./AdnAvatar.until";

export type TAdnAvatarSize = ESize.S | ESize.M | ESize.L | ESize.XL;
export interface IAdnAvatarProps {
    shape?: EShape,
    size?: TAdnAvatarSize,
    src?: string;
    alt?: string;
    className?: string;
    name?: string;
}