import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  users:User[] = [];
  Api_key!: string;

  constructor(private http:HttpClient) { 
    
  }

  findUser(username: any){
    interface ApiResponse{
      login:string;
      html_url:string; 
      avatar_url:string;
      bio:any;
      name:any;
      location:any;
      followers: any;
      following: any;
      created_at : Date;
      public_repos: any
    }
    
    let searchEndpoint = `https://api.github.com/users/${username}`
    // "https://api.github.com/users/"+username+"?access_token="+environment.Api_key
    ;
    let promise = new Promise<void>((resolve,reject)=>{
      this.users = [];
      this.http.get<ApiResponse>(searchEndpoint).toPromise().then(
        (results: any)=>{
          console.log(results)
        this.users.push(results);
        console.log(results)
        resolve();
      },(error: any)=>{
        
        reject(error);
      }
      )
    })
    return promise;
  }
}
