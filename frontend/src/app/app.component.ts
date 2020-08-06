import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Auth-Token-Interceptor';

  constructor(public authService: AuthService){

  }

logout(){
  this.authService.logout()
}

}