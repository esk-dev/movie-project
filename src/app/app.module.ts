import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
// Feature Modules
import { UiModule } from './ui/ui.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from '@shared/shared.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    UiModule,
    CoreModule,
    SharedModule,
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
