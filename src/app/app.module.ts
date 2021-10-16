import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderModule }from 'ngx-order-pipe';


import { RodapeComponent } from './rodape/rodape.component';

import { MenuComponent } from './menu/menu.component';

import { InicioComponent } from './inicio/inicio.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { BarraLateralComponent } from './barra-lateral/barra-lateral.component';
import { TemaComponent } from './tema/tema.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { MypostsComponent } from './myposts/myposts.component';
import { BarraLateralDireitaComponent } from './barra-lateral-direita/barra-lateral-direita.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { AlertasComponent } from './alertas/alertas.component';



@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    MenuComponent,
    InicioComponent,
    EntrarComponent,
    CadastrarComponent,
    MenuComponent,
    BarraLateralComponent,
    TemaComponent,
    TemaDeleteComponent,
    TemaEditComponent,
    PostagemDeleteComponent,
    PostagemEditComponent,
    MypostsComponent,
    BarraLateralDireitaComponent,
    UsuarioEditComponent,
    AlertasComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide : LocationStrategy, 
    useClass : HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
