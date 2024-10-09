export interface IUser {
  createdOn: Date;
  updatedOn: Date;
  userStatus: string;
  userProfile: IUserProfile;
  id: string;
  email: string;
  emailConfirmed: boolean;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnabled: boolean;
  accessFailedCount: number;
}

export interface IUserProfile {
  profileId: string;
  userId: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  createdOn: Date;
  updatedOn: Date;
}
interface IUserMedia {
  mediaId: string;
  queryMediaId: string;
  mediaLink: string;
  createdOn: string;
  updatedOn: string;
}
interface IUserProfileAvatar extends IUserProfile {
  userAvatar: IUserMedia;
  userCoverImage: IUserMedia;
  imageId: string;
  coverImageId: string;
}


export interface IUserAdmin {
  createdOn: string;
  updatedOn: string;
  userStatus: string;
  userProfile: IUserProfileAvatar;
  roles: string;
  genderName: string;
  id: string;
  userName: string;
  email: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumberConfirmed: boolean;
  twoFactorEnabled: boolean;
  lockoutEnabled: boolean;
  accessFailedCount: number;
}