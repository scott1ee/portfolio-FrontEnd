import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';

const routes: Routes = [
     {
          path: '',
          component: AppComponent 
     },
     {
          path: 'login',
          component: NavbarComponent
     }
];

@NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]
})
export class AppRoutingModule { }
