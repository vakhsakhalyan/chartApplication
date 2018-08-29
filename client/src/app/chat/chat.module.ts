import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialPackageModule } from '../material-package/material-package.module';
import { ChatComponent } from './chat.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialPackageModule,
    ReactiveFormsModule
  ],
  declarations: [ChatComponent]
})
export class ChatModule { }
