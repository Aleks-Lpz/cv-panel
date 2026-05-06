import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importante para ngModel

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule], // Asegúrate de que FormsModule esté aquí
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  // 1. Declarar el objeto que usa el formulario
  newWork = {
      company: '',
      position: '',      // Cambiado de 'role' a 'position' para que coincida con tu HTML
      startDate: '',     // Faltaba
      endDate: '',       // Faltaba
      accomplishments: ''
    };

  // 2. Declarar la función que llama el botón
  guardarTrabajo() {
    console.log('Guardando...', this.newWork);
    // Aquí iría tu lógica de Firebase que hicimos antes
  }
}
