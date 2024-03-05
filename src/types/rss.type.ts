import type { BaseDataType } from '@dynamicideas/base-types';

interface RssEntityDataType extends BaseDataType {
  id: string;
  title: string;
  link: string;
  description?: string;
  publishedAt: Date;
}

interface RssDataType extends BaseDataType {
  title?: string;
  link?: string;
  description?: string;
  generator?: string;
  language?: string;
  publishedAt?: Date;
  entries?: RssEntityDataType[];
}

export type { RssEntityDataType, RssDataType };
