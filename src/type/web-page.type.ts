import type { BaseModelType } from '@dynamicideas/base-types';

interface WebPageDataType extends BaseModelType {
  userId?: string;
  username: string;
  encodedUrl: string;
}

export type { WebPageDataType };
