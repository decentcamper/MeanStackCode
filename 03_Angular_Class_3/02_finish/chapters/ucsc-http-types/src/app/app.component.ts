import { Component } from '@angular/core';
/*import {Http} from "@angular/http";*/
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams} from "@angular/common/http";
import {toPromise} from "rxjs/operator/toPromise";
import {RequestOptions} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result={};

  /**
   * We store the root of our API in a variable so we can easily refer to it in our functions.
   */
  apiRoot: string = "http://httpbin.org";


  /**
   * We’ve injected the Http service onto our component and stored it as a private property.
   * @param http
   */

  constructor(private httpClient: HttpClient) { }

  doGET() {
    //console.log("GET");
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    this.httpClient.get(url).subscribe(res => console.log(res));
  }

  doGetWithSearchParams(){

    console.log("GET");
    let url = `${this.apiRoot}/get`;
/*    let search = new URLSearchParams();
    search.set('foo', 'moo');
    search.set('limit', 25);*/

    let params = new HttpParams();
    params = params.append('foo', 'moo');
    params = params.append('limit', '25');
    this.httpClient.get(url, {params}).subscribe(res => console.log(res));

  }

  doPOST() {
    console.log("POST");
    let url = `${this.apiRoot}/post`;
    let params = new HttpParams();
    params = params.append('foo', 'moo');
    params = params.append('limit', '25');
    this.httpClient.post(url, {moo:"foo",goo:"loo"}, {params}).subscribe(res => console.log(res));
  }

  doPUT() {
    console.log("PUT");
    let url = `${this.apiRoot}/put`;
    let params = new HttpParams();
    params = params.append('foo', 'moo');
    params = params.append('limit', '25');
    this.httpClient.post(url, {moo:"foo",goo:"loo"}, {params}).subscribe(res => console.log(res));
  }

  doDELETE() {
    console.log("DELETE");
    let url = `${this.apiRoot}/delete`;
    let params = new HttpParams();
    params = params.append('foo', 'moo');
    params = params.append('limit', '25');
    this.httpClient.delete(url, {params}).subscribe(res => console.log(res));  console.log("DELETE");
  }

  doGETAsPromise() {
    //console.log("GET");
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    this.httpClient.get(url).toPromise()
      .then(res => console.log(res));

  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    let url = `${this.apiRoot}/post`;
    this.httpClient.get(url)
      .toPromise()
      .then(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );

  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
    console.log("GET AS OBSERVABLE ERROR");
    let url = `${this.apiRoot}/post`;
    this.httpClient.get(url).subscribe(
      res => console.log(res),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );

  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', btoa('username:password'));
    let url = `${this.apiRoot}/get`;
    this.httpClient.get(url,{headers}).subscribe(
      res => console.log(res),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }
}


