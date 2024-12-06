import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuhannadekFilledInfoComponent } from './muhannadek-filled-info.component';

describe('MuhannadekFilledInfoComponent', () => {
  let component: MuhannadekFilledInfoComponent;
  let fixture: ComponentFixture<MuhannadekFilledInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuhannadekFilledInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MuhannadekFilledInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
