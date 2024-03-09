import type { BaseModelType } from '@dynamicideas/base-types';

interface EmailDataType extends BaseModelType {
  fromEmail: string;
  toUserId: string;
  toUserKindleEmail: string;
  subject?: string;
  contentInHTML?: string;
  attachmentUrl?: string;
  sent?: boolean;
  sentAt?: Date;
}

export type { EmailDataType };
