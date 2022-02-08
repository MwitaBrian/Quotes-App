export class Quote {
  toggleDetails: boolean;
  constructor(public id: number, public quote: string, public author: string, public name: string ){
    this.toggleDetails = false;
  }
}
