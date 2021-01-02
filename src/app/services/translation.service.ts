import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  language = new ReplaySubject<string>();

  constructor() {}
}
