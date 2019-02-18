class Book {
  private _title: string;
  private _subtitle: string;
  private _authors: string;
  private _isbn13: string;
  private _pages: string;
  private _year: string;
  private _desc: string;
  private _price: string;
  private _img: string;

  constructor(json: any) {
      this._title = json.title;
      this._subtitle = json.subtitle;
      this._authors = json.authors;
      this._isbn13 = json.isbn13;
      this._pages = json.pages;
      this._year = json.year;
      this._desc = json.desc;
      this._price = json.price;
      this._img = json.img;
  }

  get title(): string { return this._title; }
  set title(title: string) { this._title = title; }
  
  get subtitle(): string { return this._subtitle; }
  set subtitle(subtitle: string) { this._subtitle = subtitle; }

  get authors(): string { return this._authors; }
  set authors(authors: string) { this._authors = authors; }

  get isbn13(): string { return this._isbn13; }
  set isbn13(isbn13: string) { this._isbn13 = isbn13; }

  get pages(): string { return this._pages; }
  set pages(pages: string) { this._pages = pages; }

  get year(): string { return this._year; }
  set year(year: string) { this._year = year; }

  get desc(): string { return this._desc; }
  set desc(desc: string) { this._desc = desc; }

  get price(): string { return this._price; }
  set price(price: string) { this._price = price; }

  get img(): string { return this._img; }
  set img(img: string) { this._img = img; }
  
}
