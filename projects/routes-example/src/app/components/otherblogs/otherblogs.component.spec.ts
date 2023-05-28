import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherblogsComponent } from './otherblogs.component';

describe('OtherblogsComponent', () => {
  let component: OtherblogsComponent;
  let fixture: ComponentFixture<OtherblogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherblogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherblogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
