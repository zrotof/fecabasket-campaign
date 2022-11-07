import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SwiperModule } from 'swiper/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';

import { ToastModule } from 'primeng/toast';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import { StepsModule } from 'primeng/steps';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { DonationsComponent } from './components/donations/donations.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeAboutComponent } from './components/home-about/home-about.component';
import { HomeProgramComponent } from './components/home-program/home-program.component';
import { HomeComponent } from './components/home/home.component';
import { InfiniteScrollArgumentComponent } from './components/infinite-scroll-argument/infinite-scroll-argument.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProgramComponent } from './components/program/program.component';
import { ShareComponent } from './components/share/share.component';
import { DonateComponent } from './components/donate/donate.component';
import { TitleComponent } from './components/title/title.component';
import { OfficeMemberDetailsComponent } from './components/office-member-details/office-member-details.component';
import { ProgramShortComponent } from './components/program-short/program-short.component';
import { ProgramLongComponent } from './components/program-long/program-long.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AgendaComponent,
    ContactComponent,
    NotFoundComponent,
    HomeAboutComponent,
    InfiniteScrollArgumentComponent,
    DonationsComponent,
    ProgramComponent,
    HomeProgramComponent,
    ShareComponent,
    DonateComponent,
    TitleComponent,
    OfficeMemberDetailsComponent,
    ProgramShortComponent,
    ProgramLongComponent,
    TestimoniesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule,
    TooltipModule,
    DynamicDialogModule,
    ToastModule,
    TabViewModule,
    StepsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
