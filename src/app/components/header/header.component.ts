import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit, OnDestroy {
  subs: Subscription;
  constructor(
    public translationService: TranslationService,
    public transloco: TranslocoService
  ) {
    this.subs = new Subscription();
  }
  language: string;
  languageControl: FormControl;
  languages = [
    {
      code: 'en',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg',
    },
    {
      code: 'pt',
      url:
        'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg',
    },
  ];

  ngOnInit(): void {
    this.languageControl = new FormControl({
      value: undefined,
      disabled: false,
    });
    this.languageControl.valueChanges.subscribe((res) =>
      this.onChangeLanguage(res)
    );
    this.subs.add(
      this.translationService.language.subscribe((res) => {
        this.language = res;
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  onChangeLanguage(languageId: string) {
    this.transloco.setActiveLang(languageId);
    this.translationService.language.next(languageId);
  }

  get selectedLanguage() {
    return this.languages.find((l) => l.code === this.language);
  }
}
