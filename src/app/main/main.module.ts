import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const routing: Routes = [
  {
    path: 'main',
    component: MainComponent
  }
];
@NgModule({
  declarations: [ MainComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
