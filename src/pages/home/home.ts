import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchProvider } from '../../providers/search/search';
import { BookPage } from '../book/book';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public loading: boolean;
  public books: any[] = [];

  constructor(public navCtrl: NavController, public search: SearchProvider) {}

  onSearch(searchString: string) {
    this.loading = true;
    this.search.searchBook(searchString).subscribe((data: any) => {
      this.books = data;
      this.loading = false;
    });
  }

  bookDetail(isbn13: string) {
    this.navCtrl.push(BookPage, { isbn13: isbn13 });
    console.log(`${isbn13} from ${HomePage.name}`);
  }
}
