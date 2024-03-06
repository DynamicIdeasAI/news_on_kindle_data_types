import { BaseModelType } from '@dynamicideas/base-types';

interface ChannelDomParserDataType extends BaseModelType {
  channelId: string;
  titleSelector: string;
  authorsSelector?: string;
  summarySelector?: string;
  articleSelector: string;
  publishedAtSelector?: string;
  themeImageSelector?: string;
  /**
   * Suit for site domain name, if it's "*" then it's suit for all sites.
   */
  suitForSite?: '*' | 'string';
}

export type { ChannelDomParserDataType };
