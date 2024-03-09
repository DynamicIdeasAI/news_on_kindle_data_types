import type { BaseModelType } from '@dynamicideas/base-types';

interface ChannelDataType extends BaseModelType {
  /**
   * The title of the channel.
   */
  title: string;
  /**
   * The description of the channel.
   */
  description?: string;
  /**
   * The url of the channel homepage.
   */
  url?: string;
  /**
   * The url of the channel's RSS feed, reommended.
   */
  rssUrl?: string;
  /**
   * Is this channel published for all users.
   */
  isPublished?: boolean;
  /**
   * User ID of the creator of this channel info.
   */
  creatorId?: string;
  /**
   * The category IDs of this channel.
   */
  categoryIds?: string[];
}

interface ChannelSubscriptionDataType extends BaseModelType {
  /**
   * The user ID of the subscriber.
   */
  userId: string;
  /**
   * The channel ID of the subscription.
   */
  channelId: string;
  /**
   * The index in the channel subscription list of the user.
   */
  subscriptionIndex?: number;
}

export type { ChannelDataType, ChannelSubscriptionDataType };
