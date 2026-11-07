import { Component, effect } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { PERFIL } from './data/profile';
import { I18nService, Language } from './i18n/i18n';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="topo">
      <a routerLink="/" class="marca">{{ perfil.nome }}</a>
      <div class="header-actions">
        <nav [attr.aria-label]="i18n.t().common.menu">
          <a routerLink="/" routerLinkActive="ativo" [routerLinkActiveOptions]="{ exact: true }">{{ i18n.t().nav.home }}</a>
          <a routerLink="/experiencia" routerLinkActive="ativo">{{ i18n.t().nav.experience }}</a>
          <a routerLink="/projetos" routerLinkActive="ativo">{{ i18n.t().nav.projects }}</a>
          <a routerLink="/contato" routerLinkActive="ativo">{{ i18n.t().nav.contact }}</a>
        </nav>
        <div class="language-selector" role="group" [attr.aria-label]="i18n.t().common.language">
          <button type="button" [class.active]="i18n.language() === 'pt-BR'" [attr.aria-pressed]="i18n.language() === 'pt-BR'"
            [attr.aria-label]="i18n.t().language.switchTo + ': ' + i18n.t().language.portuguese" (click)="setLanguage('pt-BR')">PT</button>
          <button type="button" [class.active]="i18n.language() === 'en-US'" [attr.aria-pressed]="i18n.language() === 'en-US'"
            [attr.aria-label]="i18n.t().language.switchTo + ': ' + i18n.t().language.english" (click)="setLanguage('en-US')">EN</button>
        </div>
      </div>
    </header>
    <main class="conteudo">
      <router-outlet />
    </main>
    <footer class="rodape">© {{ ano }} {{ perfil.nome }} · {{ i18n.t().common.footer }}</footer>
  `,
})
export class AppComponent {
  perfil = PERFIL;
  ano = new Date().getFullYear();
  private routeKey: 'home' | 'experience' | 'projects' | 'contact' = 'home';

  constructor(public i18n: I18nService, private router: Router) {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe(event => {
      this.routeKey = this.getRouteKey(event.urlAfterRedirects);
      this.i18n.setPageTitle(this.routeKey);
    });
    effect(() => {
      this.i18n.language();
      this.i18n.setPageTitle(this.routeKey);
    });
  }

  setLanguage(language: Language): void {
    this.i18n.setLanguage(language);
  }

  private getRouteKey(url: string): 'home' | 'experience' | 'projects' | 'contact' {
    if (url.startsWith('/experiencia')) return 'experience';
    if (url.startsWith('/projetos')) return 'projects';
    if (url.startsWith('/contato')) return 'contact';
    return 'home';
  }
}
