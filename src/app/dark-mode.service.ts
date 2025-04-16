// dark-mode.service.ts
import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  darkMode = signal(false);

  constructor() {
    // Initialize from localStorage or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      this.darkMode.set(savedMode === 'true');
    } else {
      this.darkMode.set(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }

    // Watch for changes and apply them
    effect(() => {
      document.body.classList.toggle('dark-mode', this.darkMode());
      localStorage.setItem('darkMode', this.darkMode().toString());
    });
  }

  toggleDarkMode() {
    this.darkMode.update(mode => !mode);
  }
}