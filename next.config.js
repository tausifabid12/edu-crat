/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    firebase_apiKey: process.env.FIREBASE_apiKey,
    firebase_authDomain: process.env.FIREBASE_authDomain,
    firebase_projectId: process.env.FIREBASE_projectId,
    firebase_storageBucket: process.env.FIREBASE_storageBucket,
    firebase_messagingSenderId: process.env.FIREBASE_messagingSenderId,
    firebase_appId: process.env.FIREBASE_appId,
  },
};

module.exports = nextConfig;
