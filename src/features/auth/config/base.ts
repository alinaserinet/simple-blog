import type { AuthOptions } from 'next-auth';

type BaseAuthConfig = Omit<AuthOptions, 'callbacks' | 'providers'>;

export const authBaseConfig: BaseAuthConfig = {
  session: { strategy: 'jwt' },
};