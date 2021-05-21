import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepooComponent } from './repoo.component';

describe('RepooComponent', () => {
  let component: RepooComponent;
  let fixture: ComponentFixture<RepooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
