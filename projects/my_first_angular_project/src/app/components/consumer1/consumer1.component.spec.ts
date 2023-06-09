import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumer1Component } from './consumer1.component';

describe('Consumer1Component', () => {
  let component: Consumer1Component;
  let fixture: ComponentFixture<Consumer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consumer1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consumer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
