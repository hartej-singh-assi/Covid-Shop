import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurbanMaskComponent } from './turban-mask.component';

describe('TurbanMaskComponent', () => {
  let component: TurbanMaskComponent;
  let fixture: ComponentFixture<TurbanMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurbanMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurbanMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
