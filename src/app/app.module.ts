import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GalleryConfig} from './image-gallery/token';
// import {ImageGalleryModule} from './image-gallery/image-gallery.module';
// import {ImgSliderComponent} from './img-slider/img-slider.component';
import {ImgSliderModule} from './img-slider/img-slider.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        ImgSliderModule
    ],
    providers: [
        {provide: GalleryConfig, useValue: 2}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
