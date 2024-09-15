export { default } from 'next-auth/middleware';
console.log('hello');
export const config = { matcher: ["/user(.*)", "/admin(.*)"] }