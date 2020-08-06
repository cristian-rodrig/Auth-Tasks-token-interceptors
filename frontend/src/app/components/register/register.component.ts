import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = {
    email:'',
    password: ''
  }

  constructor(private authService: AuthService,
              private router : Router) { }

  ngOnInit(): void {
  }

  signUp(){
    this.authService.register(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token );
          this.router.navigate(['/private']);
        },
        err => console.log(err)
      )
  
  }

}
