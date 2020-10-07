export class SingleBeerModel {

  constructor(item: any = null) {
    if (item) {
      this.id = item.id;
      this.name = item.name;
      this.tagline = item.tagline;
      this.firstBrewed = item.first_brewed;
    }
  }

  id: number;
  name: string;
  tagline: string;
  firstBrewed: string;
}
