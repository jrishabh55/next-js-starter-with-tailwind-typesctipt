import { FC, PropsWithChildren } from 'react';

export type FCC<T = Record<string, unknown>> = FC<PropsWithChildren<T>>;
