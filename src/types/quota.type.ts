import { BaseDataType } from '@dynamicideas/base-types';

interface QuotaDataType extends BaseDataType {
  userId: string;
  channel: {
    maxSubscriptionAmount: number;
    currentSubscriptionAmount: number;
  };
  webPage: {
    maxSentWebPageAmountMonthly: number;
    sentWebPageAmountInCurrentMonth: number;
  };
}

export type { QuotaDataType };
