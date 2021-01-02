import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  language = new BehaviorSubject<string>('en');

  constructor() {}
}
