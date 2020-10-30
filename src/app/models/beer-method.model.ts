import {AmountsModel} from './amounts.model';
import {MashTempModel} from './mash-temp.model';

export class BeerMethodModel {
  constructor(item: any = null) {
    if (item) {
      this.fermentation = item.fermentation
      this.mashTemp = item.mash_temp
      this.twist = item.twist
    }
  }

  public fermentation: {temp:AmountsModel};
  public mashTemp: MashTempModel[];
  public twist: string
}
