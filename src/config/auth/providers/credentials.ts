import CredentialsProvider from 'next-auth/providers/credentials';

interface JWTDecoded {
  sub: number;
  full_name: string;
  isEmployee: boolean;
  iat: number;
  exp: number;
}

export default CredentialsProvider({
  name: 'Credentials',
  credentials: {
    mobile: { label: 'mobile', type: 'number' },
    otp: { label: 'otp', type: 'number' },
  },

  async authorize(credentials) {
    return null;
  },
});