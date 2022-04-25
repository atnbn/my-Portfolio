import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYSKILLSComponent } from './myskills.component';

describe('MYSKILLSComponent', () => {
  let component: MYSKILLSComponent;
  let fixture: ComponentFixture<MYSKILLSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MYSKILLSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MYSKILLSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
