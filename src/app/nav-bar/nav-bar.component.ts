import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { TranslationService } from '../services/translation.service';
import { filter } from 'rxjs/operators';

interface Language {
  code: string;
  name: string;
  active?: boolean;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  language: Language;
  languages: Language[] = [
  { code: 'en-US', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt-BR', name: 'Português' },
  ];

  constructor(
    private translationService: TranslationService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setSelectedLanguage();
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe(event => {
        this.setSelectedLanguage();
      });
  }

  setLanguage(lang) {
    this.languages.forEach((language: Language) => {
      if (language.code === lang) {
        language.active = true;
        this.language = language;
      } else {
        language.active = false;
      }
    });
    this.translationService.setLanguage(lang);
  }

  setSelectedLanguage(): any {
    this.setLanguage(this.translationService.getSelectedLanguage());
  }

}
