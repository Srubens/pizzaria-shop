import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProdutoComponent } from './components/produto/produto.component';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import localePt from "@angular/common/locales/pt"
import { registerLocaleData } from '@angular/common';
import { CarrinhoService } from './service/carrinho.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoogleSheetService } from './service/google-sheet.service';
registerLocaleData(localePt,'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProdutoComponent,
    OrdemCompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'pt-BR'},
    CarrinhoService,
    GoogleSheetService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
