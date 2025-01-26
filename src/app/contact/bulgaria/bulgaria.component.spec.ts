import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulgariaComponent } from './bulgaria.component';

describe('BulgariaComponent', () => {
  let component: BulgariaComponent;
  let fixture: ComponentFixture<BulgariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BulgariaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BulgariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
