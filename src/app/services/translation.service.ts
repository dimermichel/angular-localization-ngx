import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export interface Locale {
  lang: string;
  data: Object;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private langIds: any = [];

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en-US']);
    this.translate.setDefaultLang('en-US');
  }

  loadTranslations(...args: Locale[]): void {
    const locales = [...args];

    locales.forEach(locale => {
      this.translate.setTranslation(locale.lang, locale.data, true);
      this.langIds.push(locale.lang);
    });

    const browserDefaultLanguage = window.navigator.language;
    const allLanguagesSupported = this.translate.langs;
    this.translate.addLangs(this.langIds);

    if (!localStorage.getItem('language') && allLanguagesSupported.includes(browserDefaultLanguage)) {
      this.translate.setDefaultLang(browserDefaultLanguage);
    }
  }

  setLanguage(lang) {
    if (lang) {
      this.translate.use(this.translate.getDefaultLang());
      this.translate.use(lang);
      localStorage.setItem('language', lang);
    }
  }

  getSelectedLanguage(): any {
    return localStorage.getItem('language') || this.translate.getDefaultLang();
  }
}
