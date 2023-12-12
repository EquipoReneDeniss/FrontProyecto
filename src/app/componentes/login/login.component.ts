import { FormBuilder, FormGroup, Validators } from "@angular/forms"

import { APIService } from "src/app/core/services/api/api.service";
import { AUTHService } from "src/app/core/services/auth/auth.service";
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { faL } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  error:boolean = false;
  correct:boolean = false;
  // FormGroup para el Formulario
  auth: FormGroup = this.fb.group({
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
    private authService: AUTHService,
    // Register Form
    private fb: FormBuilder
  ) {}

  // Cuando se envie el formulario
  onSubmit() {
    if (this.auth.valid) {
      const formData = this.auth.value;
      
      this.apiService.authUser(formData).subscribe(
        (response) => {
          this.correct=true;
          this._snackBar.open("Sesión Iniciada correctamente", "Cerrar", {
            duration: 2.5*1000
          });
          console.log('Petición POST exitosa:', response);
          this.authService.saveUserId(response.userId);
        },
        (error) => {
          this.error=true;
          this._snackBar.open("Contraseña o correo incorrectos.", "Cerrar", {
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
