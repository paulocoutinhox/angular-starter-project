import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from "../../aot/src/app/modules/app.module.ngfactory";
import { enableProdMode } from "@angular/core";

if (process.env.ENV === 'production') {
	enableProdMode();
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
