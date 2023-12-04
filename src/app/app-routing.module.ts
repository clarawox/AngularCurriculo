import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PietroComponent } from './pietro/pietro.component';
import { HomeComponent } from './home/home.component';
import { QueziaComponent } from './quezia/quezia.component';
import { MariaComponent } from './maria/maria.component';
import { JulioComponent } from './julio/julio.component';
import { LuizaComponent } from './luiza/luiza.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'pietro', component:PietroComponent},
  {path: 'quezia', component:QueziaComponent},
  {path: 'maria', component:MariaComponent},
  {path: 'julio', component:JulioComponent},
  {path: 'luiza', component:LuizaComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
