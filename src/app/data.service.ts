import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import{catchError,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private gamesUrl ='http://starlord.hackerearth.com/gamesarena';

  constructor(private http: HttpClient) { }

  getHeroes (): Observable<any> {
    return this.http.get<any>(this.gamesUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    )

    }
  private handleError(error:any) {
    console.error(error);
    return throwError(error);
  }
}
