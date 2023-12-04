import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../components/user';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private db: AuthenticationService, private router: Router) { }

  loginUser: { email: string, password: string } = { email: '', password: '' };
  loggedUser: { name: string; email: string } | null = { name: '', email: '' }

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
