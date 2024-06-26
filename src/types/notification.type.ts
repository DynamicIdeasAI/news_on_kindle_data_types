import type { BaseModelType } from '@dynamicideas/base-types';
import type { ChannelDataType, ChannelSubscriptionDataType } from './channel.type';

export const NotificationWildcard = '*';

export type NotificationCategoryType = 'channel-published' | 'channel-subscribed';

export type NotificationPayloadType = ChannelDataType | ChannelSubscriptionDataType;

interface NotificationDataType extends BaseModelType {
  category: NotificationCategoryType;
  message: string;
  payload?: NotificationPayloadType;
  publisherId: string;
  publisher?: { [key in 'username' | 'nickname' | 'avatarUrl']: string };
  subscriberIds: string[];
  readers?: { userId: string; createdAt: Date }[];
}

export type { NotificationDataType };
