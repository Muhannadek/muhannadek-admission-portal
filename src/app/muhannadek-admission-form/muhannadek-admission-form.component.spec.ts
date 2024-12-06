import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhannadekAdmissionFormComponent } from './muhannadek-admission-form.component';

describe('MuhannadekAdmissionFormComponent', () => {
  let component: MuhannadekAdmissionFormComponent;
  let fixture: ComponentFixture<MuhannadekAdmissionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuhannadekAdmissionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuhannadekAdmissionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
