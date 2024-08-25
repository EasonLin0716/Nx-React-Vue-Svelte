import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run my-react-app:serve',
        production: 'nx run my-react-app:preview',
      },
      ciWebServerCommand: 'nx run my-react-app:preview',
      ciBaseUrl: 'http://localhost:4300',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
