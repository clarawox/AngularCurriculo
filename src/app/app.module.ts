import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { PietroComponent } from './pietro/pietro.component';
import { QueziaComponent } from './quezia/quezia.component';
import { HomeComponent } from './home/home.component';
import { MariaComponent } from './maria/maria.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { JulioComponent } from './julio/julio.component';
import { LuizaComponent } from './luiza/luiza.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PietroComponent,
    QueziaComponent,
    HomeComponent,
    MariaComponent,
    CadastroComponent,
    JulioComponent,
    LuizaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatMenuModule, HttpClientModule,
    MatDialogModule, // Adicione o módulo MatDialog aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
