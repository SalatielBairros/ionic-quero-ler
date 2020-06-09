import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './auth/authentication.service';
import { Router } from '@angular/router';
import { MenuModel } from './shared/menu/menu.model';
import { MenuService } from './shared/menu/menu.service';
import { DatabaseProvider } from './core/database-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = new Array<MenuModel>();

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authentication: AuthenticationService,
    private router: Router,
    private menu: MenuService,
    private dbProvider: DatabaseProvider
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.dbProvider.createDatabase()
        .then(() => {
          this.authentication.authenticationState.subscribe(state => {
            if (state) {
              this.router.navigate(['']);
            } else {
              this.router.navigate(['login']);
            }
          });
        })
        .catch(() => {
          this.router.navigate(['login']);
        });

      // this.authentication.authenticationState.subscribe(state => {
      //   if (state) {
      //     this.router.navigate(['']);
      //   } else {
      //     this.router.navigate(['login']);
      //   }
      // });

    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }

    this.menu.getMenus().subscribe(menus => this.appPages = menus);
  }
}
