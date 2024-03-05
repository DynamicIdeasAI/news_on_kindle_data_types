import type { BaseDataType } from '@dynamicideas/base-types';

interface RssDataType extends BaseDataType {
  title?: string;
  description?: string;
  link?: string;
  image?: {
    url?: string;
    title?: string;
    link?: string;
  };
}

export type { RssDataType };
