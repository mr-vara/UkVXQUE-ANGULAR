import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { TestBed, async } from '@angular/core/testing';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const routes: Routes = [
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
            BrowserModule,
            ReactiveFormsModule,
            HttpClientModule,
            AppRoutingModule
        ],
        declarations: [
            AppComponent,
            AlertComponent,
            HomeComponent
        ],
        providers: [
            { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
            { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
