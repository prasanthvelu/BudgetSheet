import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetListComponent } from './sheet-list.component';

describe('SheetListComponent', () => {
  let component: SheetListComponent;
  let fixture: ComponentFixture<SheetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SheetListComponent]
    });
    fixture = TestBed.createComponent(SheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
