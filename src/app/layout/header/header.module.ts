import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LinkComponent } from './link/link.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ThemeModule } from '../theme/theme.module';
@NgModule({
  declarations: [HeaderComponent, LinkComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    ThemeModule,
    MatButtonModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
