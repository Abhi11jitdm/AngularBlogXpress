import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcriptionFormComponent } from './subcription-form.component';

describe('SubcriptionFormComponent', () => {
  let component: SubcriptionFormComponent;
  let fixture: ComponentFixture<SubcriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcriptionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubcriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
