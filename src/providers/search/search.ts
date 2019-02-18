import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchProvider {
  private url = 'https://api.itbook.store/1.0';

  constructor(public httpClient: HttpClient) {}

  public searchBook(query: string) {
    const url = `${this.url}/search/${query}`;
    return this.httpClient.get(url).pipe(map(data => data['books']));
  }

  public detailBook(query: string): Observable<Book> {
    const url = `${this.url}/books/${query}`;
    return this.httpClient.get(url);
  }
}
