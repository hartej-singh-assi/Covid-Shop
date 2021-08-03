import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoolMaskComponent } from './cool-mask.component';

describe('CoolMaskComponent', () => {
  let component: CoolMaskComponent;
  let fixture: ComponentFixture<CoolMaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoolMaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoolMaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
