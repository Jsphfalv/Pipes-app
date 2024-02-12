import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MenuComponent } from './components/menu/menu.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [MenuComponent, ToolbarComponent],
  imports: [CommonModule, PrimeNgModule],
  exports: [MenuComponent, PrimeNgModule],
})
export class SharedModule {}
