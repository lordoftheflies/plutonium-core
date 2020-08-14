import * as Sentry from '@sentry/node';

import { config, version } from '../package.json';
import { LogLevel } from '@sentry/types';

Sentry.init({
  dsn: 'https://24116464e8fc41488c4cd9608266486b@o361028.ingest.sentry.io/5391309',
  attachStacktrace: true,
  release: version,
  environment: config.environment,
  logLevel: config.logLevel
});
