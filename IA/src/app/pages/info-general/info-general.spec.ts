import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGeneral } from './info-general';

describe('InfoGeneral', () => {
  let component: InfoGeneral;
  let fixture: ComponentFixture<InfoGeneral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoGeneral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGeneral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
