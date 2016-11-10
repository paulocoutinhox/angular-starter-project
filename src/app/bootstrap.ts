import { platformBrowser } from '@angular/platform-browser';
import { MainModuleNgFactory } from "../../aot/src/app/modules/main.module.ngfactory";
import { enableProdMode } from "@angular/core";

if (process.env.ENV === 'production') {
	enableProdMode();
}

platformBrowser().bootstrapModuleFactory(MainModuleNgFactory);
