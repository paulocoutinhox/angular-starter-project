import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppMainComponent } from "../components/app-main/app-main.component";
import { AboutComponent } from "../components/about/about.component";
import { NotFoundComponent } from "../components/not-found/not-found.component";
import { HomeComponent } from "../components/home/home.component";
import { AppHeaderComponent } from "../components/app-header/app-header.component";
import { AppFooterComponent } from "../components/app-footer/app-footer.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
	declarations: [
		AppMainComponent,
		HomeComponent,
		AppHeaderComponent,
		AppFooterComponent,
		NotFoundComponent,
		AboutComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	bootstrap: [
		AppMainComponent
	],
	providers: [
		// services
	]
})

export class AppModule {
}
