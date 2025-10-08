import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsoCorrecto } from './uso-correcto';

describe('UsoCorrecto', () => {
  let component: UsoCorrecto;
  let fixture: ComponentFixture<UsoCorrecto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsoCorrecto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsoCorrecto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
