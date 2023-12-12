import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { APIService } from 'src/app/core/services/api/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  error:boolean = false
  correct:boolean = false
  register: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
    email: [
      '',
      [
        Validators.minLength(3),
        Validators.maxLength(150),
        Validators.required,
        Validators.email,
      ],
    ],
    password: [
      '',
      [Validators.minLength(3), Validators.maxLength(150), Validators.required],
    ],
  });

  constructor(
    private _snackBar: MatSnackBar,
    // API Service
    private apiService: APIService,
    // Register Form
    private fb: FormBuilder
  ) {}

  // Cuando se envie el formulario
  onSubmit() {
    if (this.register.valid) {
      const formData = this.register.value;
      
      this.apiService.createUSer(formData).subscribe(
        (response) => {
          this.correct = true;
          this._snackBar.open("Usuario creado correctamente", "Cerrar", {
            duration: 2.5*1000
          });
          console.log('Petición POST exitosa:', response);
        },
        (error) => {
          this.error = true;
          this._snackBar.open("Error al crear usuario, intenta de nuevo.", "Cerrar", {
            duration: 2.5*1000
          });
          console.error('Error en la petición POST:', error);
        },
      );
    } else {
      console.log('El formulario no es válido. Corrige los campos.');
    }
  }
}
