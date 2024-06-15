import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ProfileComponent } from './core/profile/profile.component';
import { InprogressComponent } from './shared/inprogress/inprogress.component';
import { CompletedComponent } from './shared/completed/completed.component';

export const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		children:[
			{
				path: "",
				component: InprogressComponent
			},
			{
				path: "completed",
				component: CompletedComponent
			},
		]
	},
	{
		path: "profile",
		component: ProfileComponent
	},
];
