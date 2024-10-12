import {
  ApplicationConfig,
  LOCALE_ID,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core'
import { provideRouter } from '@angular/router'
import localeEnGB from '@angular/common/locales/en-GB'

import { routes } from './app.routes'
import { provideHttpClient } from '@angular/common/http'
import { registerLocaleData } from '@angular/common'

registerLocaleData(localeEnGB, 'en-GB')

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'en-GB' },
  ],
}
