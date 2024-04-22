import type { BaseModelType } from '@dynamicideas/base-types';

interface WebpageDataType extends BaseModelType {
  userId?: string;
  username: string;
  encodedUrl: string;
}

export type { WebpageDataType };
