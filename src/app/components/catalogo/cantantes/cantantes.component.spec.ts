import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantantesComponent } from './cantantes.component';

describe('CantantesComponent', () => {
  let component: CantantesComponent;
  let fixture: ComponentFixture<CantantesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CantantesComponent]
    });
    fixture = TestBed.createComponent(CantantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
