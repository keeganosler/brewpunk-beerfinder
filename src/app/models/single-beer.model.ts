import {BeerIngredientsModel} from './beer-ingredients.model';
import {BeerMethodModel} from './beer-method.model';

export class SingleBeerModel {

  constructor(item: any = null) {
    if (item) {
      this.id = item.id;
      this.name = item.name;
      this.tagline = item.tagline;
      this.firstBrewed = item.first_brewed;
      this.description = item.description;
      this.ebc = item.ebc;
      this.ibu = item.ibu;
      this.abv = item.abv;
      this.imageUrl = item.image_url;
      this.attenuationLevel = item.attenuation_level;
      this.brewersTips = item.brewers_tips;
      this.foodPairings = item.food_pairing;
      this.ph = item.ph
      this.srm = item.srm
      this.ingredients = new BeerIngredientsModel(item.ingredients)
      this.method = new  BeerMethodModel(item.method)
    }
  }

  id: number;
  name: string;
  tagline: string;
  firstBrewed: string;
  description: string;
  ebc: number;
  ibu: number;
  abv: number;
  imageUrl: string;
  attenuationLevel: number;
  brewersTips: string;
  foodPairings: string[];
  ph: number;
  srm: number;
  ingredients: BeerIngredientsModel;
  method: BeerMethodModel;
}
