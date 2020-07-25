import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class UserAccount {
    constructor(private http: HttpClient){}


   
    login(userData){
        let url = "https://xebiascart.herokuapp.com/users?username="+userData;
        return this.http.get(url)
    }
}