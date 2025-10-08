import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduccionIA } from './introduccion-ia';

describe('IntroduccionIA', () => {
  let component: IntroduccionIA;
  let fixture: ComponentFixture<IntroduccionIA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduccionIA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduccionIA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
