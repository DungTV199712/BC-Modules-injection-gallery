import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormsModule} from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
import {GalleryConfig} from './image-gallery/token';
import { ImageGalleryModule} from './image-gallery/image-gallery.module';
// import { ImageGalleryComponent } from './image-gallery/image-gallery.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImageGalleryModule,
  ],
  providers: [
    {provide: GalleryConfig, useValue: 2}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
