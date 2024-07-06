import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { ProfileComponent } from './core/profile/profile.component';
import { InprogressComponent } from './shared/inprogress/inprogress.component';
import { CompletedComponent } from './shared/completed/completed.component';
import { UserdataComponent } from './shared/userdata/userdata.component';
import { FriendsComponent } from './shared/friends/friends.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';

export const routes: Routes = [
	{
		path: "",
		component: HomeComponent,
		children: [
			{
				path: "",
				component: InprogressComponent
			},
			{
				path: "completed",
				component: CompletedComponent
			}
		]
	},
	{
		path: "profile",
		component: ProfileComponent
	},
	{
		path: "userdata",
		component: UserdataComponent
	},
	{
		path: "friends",
		component: FriendsComponent
	},
	{
		path: "settings",
		component: SettingsComponent
	},
	{
		path: "login",
		component: LoginComponent
	},
	{
		path: "register",
		component: RegisterComponent
	}
];
