import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FBaseComponent } from './f-base.component';

describe('FBaseComponent', () => {
  let component: FBaseComponent;
  let fixture: ComponentFixture<FBaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FBaseComponent]
    });
    fixture = TestBed.createComponent(FBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
