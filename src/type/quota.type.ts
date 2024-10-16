import { BaseDataType } from '@dynamicideas/base-types';

interface QuotaDataType extends BaseDataType {
  userId: string;
  channel: {
    maxChannelSubscriptionAmount: number;
    currentChannelSubscriptionAmount: number;
  };
  webPage: {
    maxSentWebPageAmountMonthly: number;
    sentWebPageAmountInCurrentMonth: number;
  };
}

export type { QuotaDataType };
