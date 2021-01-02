import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  subs: Subscription;
  constructor(public translationService: TranslationService) {
    this.subs = new Subscription();
  }
  browserLanguage: string;

  ngOnInit(): void {
    this.subs.add(
      this.translationService.browserLanguage.subscribe(
        (res) => (this.browserLanguage = res)
      )
    );
  }

  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }
}