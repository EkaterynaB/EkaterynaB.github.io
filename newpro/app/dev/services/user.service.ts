import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
    private loggedIn = false;

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(email, password) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http
            .post('http://localhost:1337/data', JSON.stringify({ email, password }), { headers })
            .map(res => res.json())
            .map((res) => {
                if (res.success) {
                    localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                }

                return res.success;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}