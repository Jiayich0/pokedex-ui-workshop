/** @type {import('next').NextConfig} */
const nextConfig = {
   async rewrites() {
       return [
           {
               source: '/api/pokemon',
               destination: 'https://gw3k9yom6l.execute-api.eu-west-2.amazonaws.com/Stage/pokemon',
           },
           {
               source: '/api/pokemon/:id',
               destination: 'https://gw3k9yom6l.execute-api.eu-west-2.amazonaws.com/Stage/pokemon/{id}',
           },
       ];
   }
};


export default nextConfig;
