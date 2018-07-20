import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxListColumnsComponent } from './ngx-list-columns.component';

describe('NgxListColumnsComponent', () => {
  let component: NgxListColumnsComponent;
  let fixture: ComponentFixture<NgxListColumnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxListColumnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxListColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
