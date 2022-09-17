import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { LightboxModule } from 'ngx-lightbox';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxCurrencyModule } from "ngx-currency";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
    AngularEditorModule,
    LightboxModule,
    NgxCurrencyModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSkeletonLoaderModule,
    AngularEditorModule,
    LightboxModule,
    NgxCurrencyModule
  ]
})
export class SharedModule { }
