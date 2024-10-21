import type { BaseModelType } from '@dynamicideas/base-types';

interface ChannelReportDataType extends BaseModelType {
  channelId: string;
  reportId: string;
  comment: string;
}

export type { ChannelReportDataType };
