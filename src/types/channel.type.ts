import { BaseModelType } from '@dynamicideas/base-types';

interface ChannelDataType extends BaseModelType {
  /**
   * The name of the channel.
   */
  name: string;
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
  creatorId: string;
}

export type { ChannelDataType };
