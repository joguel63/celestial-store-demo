import type { TFunction } from 'i18next'

export const getStringArray = (t: TFunction, key: string): string[] =>
  t(key, { returnObjects: true }) as string[]
