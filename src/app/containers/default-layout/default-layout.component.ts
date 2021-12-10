import { AuthService } from './../../views/auth/auth.service';
import {Component} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './default-layout.component.html'

})

export class DefaultLayoutComponent {
    public sidebarMinimized = false;
    
    constructor(private authService: AuthService)
    {
        //console.log( this.authService.currentUser() )
    }


    current_user(){
        return this.authService.current_user
    }

    logOut(){
        this.authService.removeTokenOfUser()
    }


}


