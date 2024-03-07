import { BaseModelType } from '@dynamicideas/base-types';

interface ChannelNewsParserDataType extends BaseModelType {
  channelId: string;
  titleCssSelector: string;
  titleRssEntityKey?: string;
  authorsCssSelector?: string;
  authorsRssEntityKey?: string;
  summaryCssSelector?: string;
  summaryRssEntityKey?: string;
  contentCssSelector: string;
  contentRssEntityKey?: string;
  publishedAtCssSelector?: string;
  publishedAtRssEntityKey?: string;
  themeImageCssSelector?: string;
  themeImageRssEntityKey?: string;
  /**
   * Suit for site domain name, if it's "*" then it's suit for all sites.
   */
  suitForSite?: '*' | 'string';
}

export type { ChannelNewsParserDataType };
