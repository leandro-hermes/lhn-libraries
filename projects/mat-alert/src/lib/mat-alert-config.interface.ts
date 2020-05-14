import { ThemePalette } from '@angular/material/core';
import { SafeHtml } from '@angular/platform-browser';

export class MatAlertConfig {
  title: string;
  message?: string | SafeHtml;
  buttonText?: string;
  buttonTheme?: ThemePalette;
  raisedButton?: boolean;
  autoFocus?: boolean;
}
