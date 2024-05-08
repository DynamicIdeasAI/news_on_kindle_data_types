import { BaseDataType } from '@dynamicideas/base-types';

interface QuotaDataType extends BaseDataType {
  channel: {
    maxSubscriptionAmount: number;
    currentSubscriptionCount: number;
  };
  webPage: {
    maxNewAmountMonthly: number;
    sentWebPageCountInCurrentMonth: number;
  };
}

export type { QuotaDataType };
