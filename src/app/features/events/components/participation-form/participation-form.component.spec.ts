import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipationFormComponent } from './participation-form.component';

describe('ParticipationFormComponent', () => {
  let component: ParticipationFormComponent;
  let fixture: ComponentFixture<ParticipationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParticipationFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParticipationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
