import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarProyectoComponent } from './modal-editar-proyecto.component';

describe('ModalEditarProyectoComponent', () => {
  let component: ModalEditarProyectoComponent;
  let fixture: ComponentFixture<ModalEditarProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarProyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
