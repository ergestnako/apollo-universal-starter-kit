import * as _ from 'lodash';

import * as settings from './config';

interface AppSettings {
  app?: any;
  apolloLogging?: boolean;
  user?: any;
  db?: any;
}

const envSettings: AppSettings = {
  ..._.pickBy(settings, (v, k) => k !== 'env'),
  ..._.get(settings, 'env.' + process.env.NODE_ENV)
};

export default envSettings;
