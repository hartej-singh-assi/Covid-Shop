import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadGearComponent } from './head-gear.component';

describe('HeadGearComponent', () => {
  let component: HeadGearComponent;
  let fixture: ComponentFixture<HeadGearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadGearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadGearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
