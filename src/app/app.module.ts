import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './footer/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { cardData } from './components/card/card.data';
import { SkillsComponent } from './components/skills/skills.component';
import { ImagesComponent } from './images/images.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { EducationComponent } from './education/education.component';
import { ContractsComponent } from './contracts/contracts.component';
@NgModule({
  declarations: [
  AppComponent,
  BannerComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    SkillsComponent,
    ImagesComponent,
    ExperiencesComponent,
    EducationComponent,
    ContractsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
