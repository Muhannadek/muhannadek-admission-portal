import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMuhannadekComponent } from './footer-muhannadek.component';

describe('FooterMuhannadekComponent', () => {
  let component: FooterMuhannadekComponent;
  let fixture: ComponentFixture<FooterMuhannadekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterMuhannadekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterMuhannadekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
