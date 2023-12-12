import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"
import { APIService } from 'src/app/core/services/api.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register: FormGroup = this.fb.group({
    name: ['', [Validators.minLength(3), Validators.maxLength(150), Validators.required]],
    email: ['', [Validators.minLength(3), Validators.maxLength(150), Validators.required, Validators.email]],
    password: ['', [Validators.minLength(3), Validators.maxLength(150), Validators.required]],
  })

  constructor(
    // API Service
    // private apiService: APIService,
    // Register Form
    private fb: FormBuilder
  ){}
}
