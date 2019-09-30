import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'

import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { appRoutes } from './routes'
import { AppComponent } from './app.component';
import { RegisterComponent } from './user/register.component';
import { SignInComponent } from './user/sign-in.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CatalogModule } from './catalog/catalog.module';
@NgModule({
  imports:      [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    CoreModule,
    SharedModule,
    CatalogModule
  ],
  declarations: [
    AppComponent,
    RegisterComponent,
    SignInComponent,
  ],
  providers: [
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
