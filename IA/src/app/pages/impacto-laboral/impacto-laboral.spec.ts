import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactoLaboral } from './impacto-laboral';

describe('ImpactoLaboral', () => {
  let component: ImpactoLaboral;
  let fixture: ComponentFixture<ImpactoLaboral>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImpactoLaboral]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImpactoLaboral);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
