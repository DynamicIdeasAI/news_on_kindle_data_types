import type { BaseModelType } from '@dynamicideas/base-types';

interface EmailDataType extends BaseModelType {
  from: string;
  to: string[];
  cc?: string[];
  subject: string;
  html: string;
  attachments: { filename: string; content: Buffer }[];
}

export type { EmailDataType };
