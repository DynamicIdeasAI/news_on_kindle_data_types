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
   * The cover image url of the channel.
   */
  coverImageUrl?: string;
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
  /**
   * The index of the channel in refreshing queue. it's between 0 to 59, when refreshing starts, it always indicate an index and only refresh the channel with the index.
   */
  refreshIndex: number;
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
