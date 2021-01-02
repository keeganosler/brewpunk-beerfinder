import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TranslocoService } from '@ngneat/transloco';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
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

  ngOnInit(): void {
    this.languageControl = new FormControl({
      value: this.language,
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
}
