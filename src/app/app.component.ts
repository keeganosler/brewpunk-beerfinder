import { Component, OnInit } from '@angular/core';
import { getBrowserLang } from '@ngneat/transloco';
import { TranslationService } from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'brewpunk-beerfinder';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.browserLanguage.next(getBrowserLang());
  }
}
