import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../components/user';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private db: AuthenticationService, private router: Router) { }

  loginUser: { email: string, password: string } = { email: '', password: '' };
  loggedUser: { name: string; email: string } | null = { name: '', email: '' }

  login() {
    this.db.login(this.loginUser);
    this.loggedUser = this.db.getUserInfo();
  }

  user: User = new User();
  submitted = false;

  save() {
    this.db.register(this.user);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    this.inverteFlag();
  }

  cadastroFlag: boolean = false;

  inverteFlag() {
    this.cadastroFlag = !this.cadastroFlag;
  }
}
