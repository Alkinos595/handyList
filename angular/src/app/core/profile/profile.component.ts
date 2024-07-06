import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-profile',
	standalone: true,
	imports: [RouterOutlet, RouterLink],
	templateUrl: './profile.component.html',
	styles: [`
		.login:hover h5 {
			color: white;
		}
	`]
})
export class ProfileComponent {

}
