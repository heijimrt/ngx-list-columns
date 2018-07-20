import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxListColumnsComponent } from './ngx-list-columns.component';
import { ListColumnsInsideDirective } from '../directives/list-columns-inside.directive';
import { NgxListColumnsSearchModule } from '../components/ngx-list-columns-search/ngx-list-columns-search.module';
import { FilterPipe } from '../pipes/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    NgxListColumnsSearchModule
  ],
  declarations: [
    NgxListColumnsComponent,
    ListColumnsInsideDirective,
    FilterPipe
  ],
  exports: [
    NgxListColumnsComponent,
    ListColumnsInsideDirective
  ]
})
export class NgxListColumnsModule { }
