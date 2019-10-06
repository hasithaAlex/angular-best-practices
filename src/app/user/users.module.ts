import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { RegisterComponent } from './register.component';
import { SignInComponent } from './sign-in.component';



@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'register', component: RegisterComponent, },
            { path: 'sign-in', component: SignInComponent, },
        ]),
        ReactiveFormsModule,
        FormsModule,
        SharedModule
    ],
    exports: [ ],
    declarations: [ RegisterComponent, SignInComponent],
    providers: [ ]
})

export class UserModule { };