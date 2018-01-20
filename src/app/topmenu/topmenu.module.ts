import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopmenuComponent } from './topmenu.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule
    ,RouterModule
  ],
  declarations: [TopmenuComponent],
  exports:[TopmenuComponent]
})
export class TopmenuModule { }
