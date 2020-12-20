import debug from 'debug';

const ROOT_NAMESPACE = 'web-parmazip-main';

export const log = debug(ROOT_NAMESPACE);
export const initLogger =
  namespace => debug(`${ROOT_NAMESPACE}:${namespace}`);
