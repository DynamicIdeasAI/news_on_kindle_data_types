import { BaseModelType } from '@dynamicideas/base-types';

interface QuotaDataType extends BaseModelType {
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
