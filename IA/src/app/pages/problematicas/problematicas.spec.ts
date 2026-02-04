import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Problematicas } from './problematicas';

describe('Problematicas', () => {
  let component: Problematicas;
  let fixture: ComponentFixture<Problematicas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Problematicas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Problematicas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
