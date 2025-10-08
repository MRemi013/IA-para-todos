import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confusiones } from './confusiones';

describe('Confusiones', () => {
  let component: Confusiones;
  let fixture: ComponentFixture<Confusiones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confusiones]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Confusiones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
