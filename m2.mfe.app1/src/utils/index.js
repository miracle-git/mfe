import { getEnvConfig } from 'm2-core'
import config from 'config/env.conf'
import { name } from '../../package'

export const app = window.__context__
export const mfe = window.__mfe__
export const base = window.__mfe__[name]
export const env = config
export const conf = (key = '') => getEnvConfig(config, key)