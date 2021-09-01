import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConactUsComponent } from './pages/conact-us/conact-us.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FormsContactUsComponent } from './components/forms-contact-us/forms-contact-us.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ConactUsComponent,
    HeaderComponent,
    BannerComponent,
    FormsContactUsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
