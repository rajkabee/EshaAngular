import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Consumer2Component } from './consumer2.component';

describe('Consumer2Component', () => {
  let component: Consumer2Component;
  let fixture: ComponentFixture<Consumer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Consumer2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Consumer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
