import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentajasDesventajas } from './ventajas-desventajas';

describe('VentajasDesventajas', () => {
  let component: VentajasDesventajas;
  let fixture: ComponentFixture<VentajasDesventajas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VentajasDesventajas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentajasDesventajas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
