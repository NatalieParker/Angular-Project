import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";

import { RegisterComponent } from "./components/register/register.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";
import { reducers } from "./store/reducers";
import { AuthService } from "./services/auth.service";

const routes = [
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "login",
        component: LoginComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        StoreModule.forFeature("auth", reducers)
        // StoreModule.forRoot(reducers)
    ],
    declarations: [RegisterComponent, LoginComponent],
    providers: [AuthService]
})
export class AuthModule {}
