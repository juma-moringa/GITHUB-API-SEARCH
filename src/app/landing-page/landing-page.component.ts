import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  users!:Users[];

  searchUserName(username: string){
   this.httpServiceService.findUser(username).then(
     ()=>{
       this.users = this.httpServiceService.users;
       console.log(this.users);
     },
     (error: any)=>{
       console.log(error)
     }
   )
  }
  constructor(public httpServiceService:HttpServiceService) { }

  ngOnInit() {
    
    this.searchUserName('juma-moringa');
  }

}
