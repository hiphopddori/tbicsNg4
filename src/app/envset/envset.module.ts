import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnvsetComponent } from './envset.component';
import {EnvsetService} from './envset.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule
    ,FormsModule
    ,DialogModule
  ],
  declarations: [EnvsetComponent]
  ,providers:[EnvsetService]
})
export class EnvsetModule { }
