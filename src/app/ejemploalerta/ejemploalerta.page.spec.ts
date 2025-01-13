import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EjemploalertaPage } from './ejemploalerta.page';

describe('EjemploalertaPage', () => {
  let component: EjemploalertaPage;
  let fixture: ComponentFixture<EjemploalertaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploalertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
