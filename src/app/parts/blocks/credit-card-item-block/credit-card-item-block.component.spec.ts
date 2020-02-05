import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditItemBlockComponent } from './credit-card-item-block.component';

describe('CreditItemBlockComponent', () => {
  let component: CreditItemBlockComponent;
  let fixture: ComponentFixture<CreditItemBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditItemBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditItemBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
