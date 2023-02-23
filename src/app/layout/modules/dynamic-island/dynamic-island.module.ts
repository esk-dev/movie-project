import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicIslandComponent } from './dynamic-island/dynamic-island.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LinkModule } from '../link/link.module';

@NgModule({
  declarations: [DynamicIslandComponent],
  imports: [CommonModule, LinkModule, FontAwesomeModule],
  exports: [DynamicIslandComponent],
})
export class DynamicIslandModule {}
