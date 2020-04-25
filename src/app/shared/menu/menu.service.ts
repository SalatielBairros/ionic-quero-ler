import { Injectable } from '@angular/core';
import { MenuModel } from './menu.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private itemsMenu: Array<MenuModel> = [
    {
      title: 'Início',
      url: '/folder/Home',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/folder/Perfil',
      icon: 'person-circle'
    },
    {
      title: 'Meus livros',
      url: '/books',
      icon: 'book'
    },
    {
      title: 'Empréstimos',
      url: '/folder/Emprestimos',
      icon: 'repeat'
    },
    {
      title: 'Solicitações',
      url: '/folder/Solicitacoes',
      icon: 'megaphone'
    }
  ];

  public getMenus(): Observable<Array<MenuModel>> {
    return of(this.itemsMenu);
  }
}
