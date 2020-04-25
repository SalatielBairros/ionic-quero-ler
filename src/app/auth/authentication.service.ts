import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticationState = new BehaviorSubject(false);

  constructor(private storage: Storage, private plt: Platform) {
    this.plt.ready().then(() => {
      this._checkToken();
    });
  }

  public login(token: string) {
    this.storage.set(TOKEN_KEY, token).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }

  public logout() {
    this.storage.remove(TOKEN_KEY).then(() => this.authenticationState.next(false));
  }

  public isAuthenticated() {
    return this.authenticationState.value;
  }

  private _checkToken() {
    this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.authenticationState.next(true);
      }
    });
  }
}
