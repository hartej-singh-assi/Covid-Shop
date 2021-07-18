import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PptKitComponent } from './ppt-kit.component';

describe('PptKitComponent', () => {
  let component: PptKitComponent;
  let fixture: ComponentFixture<PptKitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PptKitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PptKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
