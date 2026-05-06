import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdminService } from './servicios/admin.service';
import { WorkExperience } from './models/cv.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
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

  constructor(private adminService: AdminService) {}

  async guardarTrabajo() {
    await this.adminService.addWork(this.newWork);
    alert('¡Trabajo añadido! Revisa tu CV en GitHub Pages.');
  }
}
