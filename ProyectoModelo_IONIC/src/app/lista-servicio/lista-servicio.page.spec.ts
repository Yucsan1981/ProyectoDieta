import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaServicioPage } from './lista-servicio.page';

describe('ListaServicioPage', () => {
  let component: ListaServicioPage;
  let fixture: ComponentFixture<ListaServicioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaServicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
