import {
  Component, Input, TemplateRef,
  ContentChild, Output, EventEmitter
} from '@angular/core';
import { ListRow } from '../models/ListRow';
import { ListColumnsInsideDirective } from '../directives/list-columns-inside.directive';

@Component({
  selector: 'ngx-list-columns',
  templateUrl: './ngx-list-columns.component.html',
  styleUrls: [ './ngx-list-columns.style.scss' ],
  host: { class: 'ngx-list-columns-element' }
})
export class NgxListColumnsComponent
{
  /**
   * It receives an array of ListRow
   */
  @Input() public data: Array<ListRow>;
  @Input() public searching: string;
  @Input() public responsive: string = 'is-mobile';
  @Input() public enableSearch: boolean = true;
  @Output() public dataNotifier: EventEmitter<Object[]> = new EventEmitter();
  @ContentChild(
    ListColumnsInsideDirective,
    { read: TemplateRef }
  ) public listColumnsInsideTemplate;

  /**
   * Receive search value to filter on list
   *
   * @param event
   */
  public receiveSearch(event)
  {
    this.searching = event;
  }

  /**
   * Emit selected item
   */
  public onSelected(item: Object[]): void
  {
    this.dataNotifier.emit(item);
  }
}
