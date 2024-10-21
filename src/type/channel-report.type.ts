import type { BaseModelType } from '@dynamicideas/base-types';

interface ChannelReportDataType extends BaseModelType {
  channelId: string;
  userId: string;
  comment: string;
  handled?: boolean;
}

export type { ChannelReportDataType };
