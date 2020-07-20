import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {HeroService} from './services/hero.service';
import {PokeService} from './services/poke.service';
import {RocpService} from './services/rocp.service';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    ProfileComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'superheroes', component: HeroListComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'profile/:heroname', component: ProfileComponent},
      {path: 'profile/:heroname/id', component: ProfileComponent},
      // {path: ''}
      {path: '**', redirectTo: 'superheroes'}
    ])
  ],
  providers: [HeroService, PokeService, RocpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
