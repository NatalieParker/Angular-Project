import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersListModule } from './usersList/usersList.module';
import { UserService } from './services/users.service';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { StoreModule } from '@ngrx/store';
import { PostsModule } from './posts/posts.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersListModule,
    LoginModule,
    PostsModule,
    RegisterModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
      autoPause: true,
    }),
  ],
  providers: [provideClientHydration(withEventReplay()), UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
