import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html'
})
export class BookPage {
  private isbn13: string;
  public loading: boolean;
  public book: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public search: SearchProvider
  ) {
    this.isbn13 = navParams.get('isbn13');
    this.bookDetail(this.isbn13);
  }

  bookDetail(isbn13: string) {
    this.loading = true;
    this.search
      .detailBook(isbn13)
      .subscribe((data: any) => {
        this.book = data;
        this.loading = false;
      });
  }
}
