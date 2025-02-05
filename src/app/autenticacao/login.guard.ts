import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad {

  constructor(private usuarioService: UsuarioService, private router: Router){}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      if(this.usuarioService.estaLogado()){
        this.router.navigate(['animais']);
        return false;
      }
      return true;
  }
}
