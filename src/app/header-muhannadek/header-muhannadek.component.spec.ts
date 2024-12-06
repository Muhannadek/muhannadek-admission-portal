import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMuhannadekComponent } from './header-muhannadek.component';

describe('HeaderMuhannadekComponent', () => {
  let component: HeaderMuhannadekComponent;
  let fixture: ComponentFixture<HeaderMuhannadekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMuhannadekComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderMuhannadekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
