import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run my-vue-app:serve',
        production: 'nx run my-vue-app:preview',
      },
      ciWebServerCommand: 'nx run my-vue-app:preview',
      ciBaseUrl: 'http://localhost:4300',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
