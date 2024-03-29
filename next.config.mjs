/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["placehold.jp", "imgfp.hotp.jp"],
  },
};

export default nextConfig;
