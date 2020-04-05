import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent, ChildComponent, TestComponent } from './app.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { SimpleReuseStrategy } from './reuse';
registerLocaleData(en);
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    NgZorroAntdModule,
    RouterModule.forRoot(
      [
        { path: '', pathMatch: 'full', redirectTo: '/demo' },
        { path: 'demo', component: ChildComponent },
        { path: 'test', component: TestComponent },
      ],
      { useHash: true }
    ),
  ],
  declarations: [AppComponent, ChildComponent, TestComponent],
  bootstrap: [AppComponent],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy },
  ],
})
export class AppModule {}
