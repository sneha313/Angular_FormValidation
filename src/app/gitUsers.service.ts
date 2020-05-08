import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs/Observable';
import { Observable, Subject } from 'rxjs';
@Injectable()
export class GithubService{
 gitApi = "https://api.github.com/users/blackmiaool/repos";
public msg = new Subject<any>();
  constructor( private http : HttpClient){}
  getUSers(): Observable<any>{
    return this.http.get(`${this.gitApi}?per_page=10`);
  }
  setMessage(value: string){
    this.msg.next(value);
  }
  getMsg(): Observable<any>{
    return this.msg.asObservable();
  }
}