import { Component, OnInit } from '@angular/core';
import { ReposServiceService } from '../repos.service';
import { Repositories } from '../repositories';

@Component({
  selector: 'app-repoo',
  templateUrl: './repoo.component.html',
  styleUrls: ['./repoo.component.css']
})
export class RepooComponent implements OnInit {

  myRepos!:Repositories[];
  constructor(public repoService:ReposServiceService) { }

  findRepo(username:string){
    this.repoService.getRepoInfo(username).subscribe((data:Repositories[]) =>{
      this.myRepos = data;
      console.log(this.myRepos)

    })
  }
  ngOnInit() {
    this.findRepo('juma-moringa');
  }
}
