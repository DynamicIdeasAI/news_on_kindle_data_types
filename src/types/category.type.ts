import type { BaseModelType } from '@dynamicideas/base-types';

interface CategoryDataType extends BaseModelType {
  /**
   * The name of the category.
   */
  name: string;
  /**
   * Amount of channel which relates to this cateogry.
   */
  relatedAmount?: number;
}

export type { CategoryDataType };
