import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "../components/home/home.component";
import { AboutComponent } from "../components/about/about.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'home', component: HomeComponent
	},
	{
		path: 'about', component: AboutComponent
	},
	{
		path: '**',
		component: NotFoundComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})

export class AppRoutingModule {
}