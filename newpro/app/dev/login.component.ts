import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from './services/user.service';

@Component({
    selector: 'login',
    template: `<h1>Login Page</h1>
               <form #signupForm="ngForm" (ngSubmit)="onSubmit(email, password)">
                    <input type="text" name="email" #email placeholder="Enter your email"/>
                    <input type="password" name="password" #passwod placeholder="Enter your password" />
                    <button type="submit" >Login</button>
               </form>`
})
export class LoginComponent {

    constructor(private userService: UserService, private router: Router) {}

    onSubmit(email, password) {
        this.userService.login(email, password).subscribe((result) => {
            if (result) {
                this.router.navigate(['']);
            }
        });
    }
}
