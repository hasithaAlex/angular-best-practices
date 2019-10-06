import { Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { RegisterComponent } from './user/register.component';
import { SignInComponent } from './user/sign-in.component';

export const appRoutes: Routes = [
  { path: 'catalog', component: CatalogComponent },
  { path: 'users', loadChildren: 'app/user/users.module#UserModule' }
];
