import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryinComponent } from './inventoryin.component';

describe('InventoryinComponent', () => {
  let component: InventoryinComponent;
  let fixture: ComponentFixture<InventoryinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
