import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoJsonPage } from './listado-json.page';

describe('ListadoJsonPage', () => {
  let component: ListadoJsonPage;
  let fixture: ComponentFixture<ListadoJsonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoJsonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
