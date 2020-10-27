import {HopsModel} from './hops.model';
import {MaltModel} from './malt.model';

export class BeerIngredientsModel {
  constructor(item: any = null) {
    if (item) {
      this.hops = item.hops
      this.malt = item.malt
      this.yeast = item.yeast
    }
  }

  public hops: HopsModel[]
  public malt: MaltModel[]
  public yeast: string;

}
