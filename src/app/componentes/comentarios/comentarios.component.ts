import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { APIService } from '../../core/services/api/api.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  comment: FormGroup =  this.fb.group({
    comment: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
  })
  constructor(
    private apiService: APIService,
    private fb: FormBuilder
  ) {}


  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
  }
  saveComment(): void {
  }
}
