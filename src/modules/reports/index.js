import path from 'path';
import config from 'config';

import { log, delay, fileExists, getReportFilesDir } from '../../utils';

// Reports
import getUserActivitys from './getUserActivity';

const slackConfig = config.get('slack');

const REPORTS_CONFIG = {
  userActivity: {
    name: 'User Activity',
    namePrefix: 'userActivity',
    type: 'csv',
    func: getUserActivity,
  },
};

export const reportsList = Object.entries(REPORTS_CONFIG)
  .map(([key, value]) => {
    const report = {
      text: value.name,
      value: key,
    };
    return report;
});
