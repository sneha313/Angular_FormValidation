import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from './gitUsers.service';
@Component({
    selector: 'user-detail',
    templateUrl: './userDetail.component.html',
    styleUrls: ['userDetail.component.css'],
    providers: [GithubService]
})
export class UserDetailComponent implements OnInit{
  constructor( private gitApiUser: GithubService){}
  @Input() registeredFormVal: any;
  userName: string;
  ngOnInit(){
    console.log("registered form val ",this.registeredFormVal);
    this.userName = this.registeredFormVal.firstName+" "+this.registeredFormVal.lastName;
    this.gitApiUser.getUSers().subscribe((userDetail) => {
      console.log("git api user detail ", userDetail);
    });    

  }
}