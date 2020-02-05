import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditOppertunitiesBlockComponent } from './credit-oppertunities-block.component';

describe('CreditOppertunitiesBlockComponent', () => {
  let component: CreditOppertunitiesBlockComponent;
  let fixture: ComponentFixture<CreditOppertunitiesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreditOppertunitiesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditOppertunitiesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
