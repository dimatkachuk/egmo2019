import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/global/_normalize.scss',
        // 'src/globals/_mixins.scss',
        // 'src/globals/_colors.scss',
        // 'src/globals/_variables.scss',
        // 'src/globals/_typography.scss'
      ]
    })
  ]
};
