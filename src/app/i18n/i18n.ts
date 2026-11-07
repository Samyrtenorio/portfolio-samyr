import { computed, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { PT_BR } from './pt-BR';
import { EN_US } from './en-US';

export type Language = 'pt-BR' | 'en-US';
export type Translations = typeof PT_BR;

const translations: Record<Language, Translations> = {
  'pt-BR': PT_BR,
  'en-US': EN_US as Translations,
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly language = signal<Language>(this.initialLanguage());
  readonly t = computed(() => translations[this.language()]);

  constructor(private title: Title, private meta: Meta) {
    this.applyDocumentLanguage(this.language());
  }

  setLanguage(language: Language): void {
    if (language === this.language()) return;
    this.language.set(language);
    try { localStorage.setItem('portfolio-language', language); } catch {}
    this.applyDocumentLanguage(language);
  }

  setPageTitle(routeKey: keyof Translations['titles']): void {
    this.title.setTitle(`${this.t().titles[routeKey]} | ${this.t().site.title}`);
    this.meta.updateTag({ name: 'description', content: this.t().site.description });
    this.meta.updateTag({ property: 'og:title', content: `${this.t().titles[routeKey]} | ${this.t().site.title}` });
    this.meta.updateTag({ property: 'og:description', content: this.t().site.description });
  }

  private initialLanguage(): Language {
    try {
      const saved = localStorage.getItem('portfolio-language');
      if (saved === 'pt-BR' || saved === 'en-US') return saved;
    } catch {}
    const browserLanguage = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : 'pt-br';
    return browserLanguage.startsWith('pt') ? 'pt-BR' : 'en-US';
  }

  private applyDocumentLanguage(language: Language): void {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
    }
  }
}
