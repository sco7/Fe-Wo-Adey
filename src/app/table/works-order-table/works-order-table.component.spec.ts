import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksOrderTableComponent } from './works-order-table.component';

describe('WorksOrderTableComponent', () => {
  let component: WorksOrderTableComponent;
  let fixture: ComponentFixture<WorksOrderTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksOrderTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksOrderTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
