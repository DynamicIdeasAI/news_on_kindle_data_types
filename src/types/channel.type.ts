import { BaseModelType } from '@dynamicideas/base-types';

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
  url: string;
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

export type { ChannelDataType };
