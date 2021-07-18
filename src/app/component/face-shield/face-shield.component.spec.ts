import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceShieldComponent } from './face-shield.component';

describe('FaceShieldComponent', () => {
  let component: FaceShieldComponent;
  let fixture: ComponentFixture<FaceShieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceShieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceShieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
