import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpclient: HttpClient) { }

  getAction(url: string) {
    return this.httpclient.get(url);
  }
}
