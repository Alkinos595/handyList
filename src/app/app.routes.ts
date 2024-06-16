import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ProfileComponent } from './core/profile/profile.component';
import { InprogressComponent } from './shared/inprogress/inprogress.component';
import { CompletedComponent } from './shared/completed/completed.component';
import { UserdataComponent } from './shared/userdata/userdata.component';
import { FriendsComponent } from './shared/friends/friends.component';
import { SettingsComponent } from './shared/settings/settings.component';

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
		component: ProfileComponent,
		children:[
			{
				path: "profile/userDate",
				component: UserdataComponent
			},
			{
				path: "profile/friends",
				component: FriendsComponent
			},
			{
				path: "profile/settings",
				component: SettingsComponent
			},

		]
	},
];
