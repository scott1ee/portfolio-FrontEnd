import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Login } from 'src/app/models/login.model';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faGithub = faGithub;
  faLinkedin = faLinkedin;

  creds: Login = {
    email: '',
    password: ''
  };

  constructor(private loginService: LoginService, private router: Router) { }

  login(form: NgForm) {
    console.log('form value', form.value);

    this.loginService.login(this.creds)
      .subscribe(response => {
        this.router.navigate(['/']);
      })
  }

}
