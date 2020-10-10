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
}
