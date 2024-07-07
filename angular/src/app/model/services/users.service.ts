import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../entities/users';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	constructor(
		private httpClient: HttpClient,
		
	){}
	public checkLogin(username:string):Observable<any> {
        return this.httpClient.head("https://localhost:5000"+"/user?username="+username)
    }
	public insertUser(user:Users):Observable<any>{
        return this.httpClient.post("https://localhost:5000"+"/users", user)
    }
	
}
