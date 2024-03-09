import type { BaseModelType } from '@dynamicideas/base-types';

interface PostDataType extends BaseModelType {
  channelId: string;
  url: string;
  originalHtmlContent?: string;
  title: string;
  content: string;
  summary?: string;
  publishedAt?: Date;
  authors?: string[];
}

export type { PostDataType };
