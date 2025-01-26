import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeorgiaComponent } from './georgia.component';

describe('GeorgiaComponent', () => {
  let component: GeorgiaComponent;
  let fixture: ComponentFixture<GeorgiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeorgiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeorgiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
