import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
   
    users: any[];

    constructor() {

        this.users = [{
            profile_pic: '',
            email: 'taimour@email.com',
            username: 'taimour',
            phone: '+92 000 0000 000',
            address: 'Islamabad, Pakistan',
            password: '123456',
            name: 'Taimour Ali',
            about: `<p>Hey! I'm Taimour, a Full Stack JavaScript developer with experience in building and 
                maintaining Membership Sites, Affiliate Systems, creating logical UIs, and developing
                all other manner of web portals/websites and online tools.</p>
                <p>I've experience building eye-catching sites and practical online tools from scratch and make 
                a point
                of ensuring cross-browser compatibility, and fluid responsiveness across devices.</p>`
        }];
    }

    isSameUser(username: string): boolean {
        return this.users.find(u => u.username === username);
    }

    isSameEamil(email: string): boolean {
        return this.users.find(u => u.email === email);
    }

    login(username: string, password: string): Observable<any> {
        const user = this.users.find(u => u.username === username);

        if (!user || (user && user.password !== password)) {
            return of({'error' : 'Invalid username/password'});
        }

        localStorage.setItem('user', JSON.stringify(user));

        return of(true);
    }
}
