import { LoginComponent } from './../../../../libs/ui-login/src/lib/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: ' ', loadChildren: './home/home.module#HomeModule' },
  { path: 'projects', loadChildren: './home/home.module#ProjectsModule' },
  { path: 'customers', loadChildren: './home/home.module#CustomersModule' },
  { path: 'login', component: LoginComponent },
  // { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
