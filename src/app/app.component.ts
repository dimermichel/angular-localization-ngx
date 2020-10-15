import { Component, OnInit } from '@angular/core';
import { TranslationService } from './services/translation.service';
import { locale as en } from '../assets/i18n/en';
import { locale as de } from '../assets/i18n/de';
import { locale as fr } from '../assets/i18n/fr';
import { locale as pt } from '../assets/i18n/pt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-localization-ngx';
  constructor( private translationService: TranslationService) {
    this.translationService.loadTranslations(en, de, fr, pt);
  }

  ngOnInit() {
    this.translationService.setLanguage(this.translationService.getSelectedLanguage());
  }
}
