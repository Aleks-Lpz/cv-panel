import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { AdminService } from './servicios/admin.service';
import { WorkExperience } from './models/cv.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
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

  // COMENTAMOS EL CONSTRUCTOR Y EL MÉTODO PARA PROBAR SI APARECE EL FORMULARIO
  /*
  constructor(private adminService: AdminService) {}

  async guardarTrabajo() {
    try {
      await this.adminService.addWork(this.newWork);
      alert('¡Trabajo añadido!');
    } catch (error) {
      console.error('Error al guardar:', error);
    }
  }
  */

  // Agregamos una función vacía para que el HTML no de error al buscar "guardarTrabajo"
  async guardarTrabajo() {
    console.log('Prueba de funcionamiento: ', this.newWork);
    alert('Modo de prueba: Revisa la consola');
  }
}
