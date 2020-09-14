import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetregComponent } from './getreg.component';

describe('GetregComponent', () => {
  let component: GetregComponent;
  let fixture: ComponentFixture<GetregComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetregComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
