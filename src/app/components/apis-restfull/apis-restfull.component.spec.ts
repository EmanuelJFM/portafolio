import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisRestfullComponent } from './apis-restfull.component';

describe('ApisRestfullComponent', () => {
  let component: ApisRestfullComponent;
  let fixture: ComponentFixture<ApisRestfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApisRestfullComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApisRestfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
