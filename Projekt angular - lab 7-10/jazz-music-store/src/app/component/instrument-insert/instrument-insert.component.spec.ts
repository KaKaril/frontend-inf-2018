import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentInsertComponent } from './instrument-insert.component';

describe('InstrumentInsertComponent', () => {
  let component: InstrumentInsertComponent;
  let fixture: ComponentFixture<InstrumentInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstrumentInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
