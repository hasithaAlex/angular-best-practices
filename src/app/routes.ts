import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { RegisterComponent } from './user/register.component';
import { SignInComponent } from './user/sign-in.component';

export const appRoutes : Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'users/register', component: RegisterComponent, },
  { path: 'users/sign-in', component: SignInComponent, },
];
