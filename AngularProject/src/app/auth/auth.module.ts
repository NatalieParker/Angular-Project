import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { RegisterComponent } from "./components/register/register.component";
import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ReactiveFormsModule } from "@angular/forms";

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
    imports: [CommonModule, 
        RouterModule.forChild(routes),
        ReactiveFormsModule],
    declarations: [RegisterComponent, LoginComponent]
})

export class AuthModule {}