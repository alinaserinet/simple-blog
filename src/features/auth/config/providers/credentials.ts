import CredentialsProvider from 'next-auth/providers/credentials';


export default CredentialsProvider({
  name: 'Credentials',
  credentials: {
    username: { label: 'username', type: 'string' },
    password: { label: 'password', type: 'password' },
  },

  async authorize(credentials) {
    return { name: 'user', id: '1' };
  },
});