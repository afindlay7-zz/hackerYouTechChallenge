import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { TileComponent } from './components/tile/tile.component';

import { LcboService } from './services/lcbo.service';
import { GoogleService } from './services/google.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    GalleryComponent,
    TileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCVYl5QhcV8QotbaBkdqaWxMzWc9DGWHMk'
    })
  ],
  providers: [LcboService, GoogleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
