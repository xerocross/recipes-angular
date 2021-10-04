import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListMainComponent } from './shopping-list-main.component';

describe('ShoppingListMainComponent', () => {
  let component: ShoppingListMainComponent;
  let fixture: ComponentFixture<ShoppingListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingListMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
