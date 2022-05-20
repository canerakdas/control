import {merge} from 'webpack-merge';

import common from './common.config.mjs';

export default merge({
  mode: 'production',
}, common);
