import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'ngx-list-columns-search',
    templateUrl: './ngx-list-columns-search.component.html',
    styleUrls: [ './ngx-list-columns-search.style.scss' ]
})

export class NgxListColumnsSearchComponent
{
    @Output() public notify: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Notify when input fires
     * 
     * @param event
     */
    public change(event): void
    {
        this.notify.emit(event);
    }
}