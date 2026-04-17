import config from './config.json';

export const baseUrl = import.meta.env.PROD
  ? `https://grzes-business.github.io/${config.repoName}`
  : "";
