/** @type {import('next').NextConfig} */
const nextConfig = {
   async rewrites() {
       return [
           {
               source: '/api/pokemon',
               destination: 'https://tsekpw0vd7.execute-api.eu-west-2.amazonaws.com/Prod/pokemon',
               //destination: 'https://rpr35yaoze.execute-api.eu-west-2.amazonaws.com/Prod/pokemon',
           },
           {
               source: '/api/pokemon/:id',
               destination: 'https://tsekpw0vd7.execute-api.eu-west-2.amazonaws.com/Prod/pokemon/:id',
               //destination: 'https://rpr35yaoze.execute-api.eu-west-2.amazonaws.com/Prod/pokemon/:id',
           },
       ];
   }
};


export default nextConfig;
