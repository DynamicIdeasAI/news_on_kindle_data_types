import { BaseDataType } from '@dynamicideas/base-types';

interface ChannelDataType extends BaseDataType {
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
   * The date this channel was created.
   */
  createdAt: Date;
  /**
   * The date this channel was last updated.
   */
  updatedAt?: Date;
}

export type { ChannelDataType };
