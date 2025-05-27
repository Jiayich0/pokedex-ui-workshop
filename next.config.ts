/** @type {import('next').NextConfig} */
const nextConfig = {
   async rewrites() {
       return [
           {
               source: '/api/pokemon',
               destination: 'https://abcd1234.execute-api.eu-west-1.amazonaws.com/Prod/pokemon',
           },
           {
               source: '/api/pokemon/:id',
               destination: 'https://abcd1234.execute-api.eu-west-1.amazonaws.com/Prod/pokemon/:id',
           },
       ];
   }
};


export default nextConfig;
