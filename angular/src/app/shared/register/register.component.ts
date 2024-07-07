import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsersService } from '../../model/services/users.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	standalone: true,
	imports: [RouterLink, ReactiveFormsModule],
	templateUrl: './register.component.html'
})
export class RegisterComponent {
	public formulario: FormGroup
	public errorConfirmarPassword: string = ''
	public errorLoginRepetido: string = ''

	public constructor(
		formBuilder: FormBuilder,
		private usersServices:UsersService,
		private router:Router
	) {
		this.formulario = formBuilder.group({
			username: formBuilder.control('', [Validators.required]),
			email: formBuilder.control('', [Validators.required, Validators.email]),
			name: formBuilder.control('', [Validators.required]),
			lastname: formBuilder.control('', [Validators.required]),
			password: formBuilder.control('', [Validators.required]),
			confirmPassword: formBuilder.control('', [Validators.required]),
		})
	}
	public checkLogin(): void {
		this.usersServices.checkLogin(this.formulario.get('username')?.value)
		.subscribe({
			next: () => this.errorLoginRepetido = 'Ya existe un usuario con ese login.',
			error: () => this.errorLoginRepetido = ''
		})
	}

}
