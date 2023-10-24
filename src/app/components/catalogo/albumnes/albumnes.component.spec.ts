import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumnesComponent } from './albumnes.component';

describe('AlbumnesComponent', () => {
  let component: AlbumnesComponent;
  let fixture: ComponentFixture<AlbumnesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumnesComponent]
    });
    fixture = TestBed.createComponent(AlbumnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
