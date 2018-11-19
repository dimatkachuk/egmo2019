// https://stenciljs.com/docs/config

import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  globalStyle: 'src/globals/app.scss',
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/_normalize.scss',
        'src/globals/_mixins.scss',
        'src/globals/_colors.scss',
        'src/globals/_variables.scss'
      ]
    })
  ]
};
