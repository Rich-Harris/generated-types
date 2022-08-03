import { get } from './proxy-server';

export type Data = Awaited<ReturnType<typeof get>>;