import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ThemeModule } from '../theme/theme.module';
import { LinkModule } from '../link/link.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    ThemeModule,
    MatButtonModule,
    LinkModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
