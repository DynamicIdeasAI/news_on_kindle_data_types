import type { BaseDataType } from '@dynamicideas/base-types';
import { ChannelDataType, ChannelSubscriptionDataType } from './channel.type';

export const NotificationWildcard = '*';

export type NotificationCategoryType = 'channel-published' | 'channel-subscribed';

export type NotificationPayloadType = ChannelDataType | ChannelSubscriptionDataType;

interface NotificationDataType extends BaseDataType {
  category: NotificationCategoryType;
  message: string;
  payload?: NotificationPayloadType;
  publisherId: string;
  publisher?: { [key in 'username' | 'nickname' | 'avatarUrl']: string };
  subscriberIds: string[];
  readers?: { userId: string; createdAt: Date }[];
  isDeleted?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export type { NotificationDataType };
