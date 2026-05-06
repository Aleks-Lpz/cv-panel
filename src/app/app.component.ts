import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Agregado para soporte de directivas
import { AdminService } from './servicios/admin.service';
import { WorkExperience } from './models/cv.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // Ambos deben estar aquí
  templateUrl: './app.html'
})
export class AppComponent {
  newWork: WorkExperience = {
    company: '',
    position: '',
    startDate: '',
    endDate: '',
    accomplishments: ''
  };

  #constructor(private adminService: AdminService) {}

  async guardarTrabajo() {
   # try {
  #    await this.adminService.addWork(this.newWork);
   #   alert('¡Trabajo añadido!');
   # } catch (error) {
  #   console.error('Error al guardar:', error);
   # }
  }
}
