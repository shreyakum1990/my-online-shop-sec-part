import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: Http) { }

  get(link){
    return this.http.get(link).toPromise();
  }
  
  post(link,data){
    return this.http.post(link,data).toPromise();
  }

  put(link,data){
    return this.http.put(link,data).toPromise();
  }

  delete(link){
    return this.http.delete(link).toPromise();
  }
}
