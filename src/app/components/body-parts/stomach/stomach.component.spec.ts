import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StomachComponent } from './stomach.component';

describe('StomachComponent', () => {
  let component: StomachComponent;
  let fixture: ComponentFixture<StomachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StomachComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StomachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
