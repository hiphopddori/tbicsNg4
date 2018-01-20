import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {TopmenuModule} from './topmenu/topmenu.module';

import {RouterModule} from '@angular/router';

import {EnvsetModule} from './envset/envset.module';
import {EnvsetComponent} from './envset/envset.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    ,BrowserAnimationsModule
    ,HttpModule
    ,TopmenuModule
    ,EnvsetModule
    ,RouterModule.forRoot(
      [
         {path:'set',component:EnvsetComponent}     //서비스 관리
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
