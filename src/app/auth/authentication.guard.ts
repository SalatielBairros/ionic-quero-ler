import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private service: AuthenticationService) { }

  canActivate(): boolean {
    return this.service.isAuthenticated();
  }
}
