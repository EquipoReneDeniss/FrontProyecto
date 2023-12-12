import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { APIService } from '../../core/services/api/api.service';
import { AUTHService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  comments: any[] = [];
  comment: FormGroup = this.fb.group({
    content: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(250)],
    ],
  });
  constructor(
    private apiService: APIService,
    private fb: FormBuilder,
    private authService: AUTHService
  ) {}

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.apiService.getComments().subscribe(
      (response) => {
        this.comments = response;
      },
      (error) => {
        console.error('Error al obtener comentarios:', error);
      }
    );
  }
  saveComment(): void {
    // Obtener el ID de usuario del servicio AUTHService
    this.authService.readUserId()
    const userId = this.authService.loggedUserId;

    // Resto de la lógica para guardar el comentario utilizando createComment
    this.apiService.createComment(userId, 1, this.comment.value).subscribe(
      (response) => {
        // Manejar la respuesta del servidor si es necesario
        console.log('Comentario guardado exitosamente:', response);

        // Actualizar la lista de comentarios después de guardar el nuevo comentario
        this.getComments();
      },
      (error) => {
        // Manejar errores en la petición
        console.error('Error al guardar el comentario:', error);
      }
    );
  }
}
