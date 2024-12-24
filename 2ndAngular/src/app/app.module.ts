import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListModule } from './usersList/usersList.module';
import { UserService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersListModule
],
  providers: [
    provideClientHydration(withEventReplay()),
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
