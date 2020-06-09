import { Component, OnInit } from '@angular/core';
import { AuthenticationModel } from '../authentication.model';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public loginData = new AuthenticationModel();
  public error: string;
  public hasMessage: boolean;

  constructor(
    private authentication: AuthenticationService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const status = this.activatedRoute.snapshot.params['status'];
    if (status === '2') {
      this.hasMessage = true;
      this.error = 'Erro ao gerar banco de dados'
    } else {
      this.hasMessage = false;
      this.error = undefined;
    }
  }

  public login(): void {
    this.authentication.login(this.loginData.getToken());
  }

}
