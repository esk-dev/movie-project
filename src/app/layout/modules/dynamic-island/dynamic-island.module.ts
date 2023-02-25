import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicIslandComponent } from './dynamic-island/dynamic-island.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [DynamicIslandComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [DynamicIslandComponent],
})
export class DynamicIslandModule {}
