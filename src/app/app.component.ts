import { Component, OnInit } from '@angular/core';
import { AdminService } from './servicios/admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent implements OnInit {
  colecciones = ['certificates', 'education', 'header', 'interests', 'languages', 'skills', 'work-experience'];
  colActual = 'work-experience';
  items: any[] = [];
  formData: any = {};
  isEditing = false;
  currentId = '';

  constructor(private adminService: AdminService) {}

  ngOnInit() { this.cargarDatos(); }

  cambiarColeccion(col: string) {
    this.colActual = col;
    this.resetForm();
    this.cargarDatos();
  }

  cargarDatos() {
    this.adminService.getData(this.colActual).subscribe(data => this.items = data);
  }

  async guardar() {
    try {
      if (this.isEditing) {
        await this.adminService.update(this.colActual, this.currentId, this.formData);
      } else {
        await this.adminService.add(this.colActual, this.formData);
      }
      this.resetForm();
    } catch (e) { alert('Error al guardar'); }
  }

  editar(item: any) {
    this.isEditing = true;
    this.currentId = item.id;
    this.formData = { ...item };
  }

  async borrar(id: string) {
    if(confirm('¿Eliminar registro?')) await this.adminService.delete(this.colActual, id);
  }

  resetForm() {
    this.formData = {};
    this.isEditing = false;
    this.currentId = '';
  }
}
