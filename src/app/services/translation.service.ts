import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  browserLanguage = new ReplaySubject<string>();

  constructor() {}
}
