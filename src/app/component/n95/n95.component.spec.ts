import { ComponentFixture, TestBed } from '@angular/core/testing';

import { N95Component } from './n95.component';

describe('N95Component', () => {
  let component: N95Component;
  let fixture: ComponentFixture<N95Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ N95Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(N95Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
