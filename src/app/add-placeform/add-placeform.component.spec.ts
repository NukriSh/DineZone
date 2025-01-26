import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaceformComponent } from './add-placeform.component';

describe('AddPlaceformComponent', () => {
  let component: AddPlaceformComponent;
  let fixture: ComponentFixture<AddPlaceformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPlaceformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPlaceformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
