import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { strictEqual } from 'assert';
import { concat } from 'rxjs';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  selectAllUrl = 'http://13.48.189.101/api/angularAPI.py?action=getItems';
  insertOneUrl = 'http://13.48.189.101/api/angularAPI.py?action=addItem&liczba_uz=46575';

  constructor(private http: HttpClient) { }

  public getRekordy() {
    return this.http.get(this.selectAllUrl);
  }

  public insert() {
    this.insertOneUrl.concat('312');
    return this.http.get(this.insertOneUrl);
  }


}
