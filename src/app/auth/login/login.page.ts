import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from '../authentication.model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginData = new AuthenticationModel();

  constructor(private authentication: AuthenticationService) { }

  ngOnInit() {
  }

  public login(): void {
    this.authentication.login(this.loginData.getToken());
  }

}
