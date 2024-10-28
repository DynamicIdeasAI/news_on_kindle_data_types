import type { BaseModelType } from '@dynamicideas/base-types';

interface WebPageDataType extends BaseModelType {
  userId?: string;
  username: string;
  encodedUrl: string;
  aiSummary?: string;
}

export type { WebPageDataType };
