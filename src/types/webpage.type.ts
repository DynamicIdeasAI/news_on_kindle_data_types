import type { BaseModelType } from '@dynamicideas/base-types';

interface WebpageDataType extends BaseModelType {
  url: string;
  userId?: string;
  username: string;
}

export type { WebpageDataType };
