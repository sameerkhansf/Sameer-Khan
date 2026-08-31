/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  async redirects() {
    // The site served 6 locale prefixes (hand-rolled middleware) until Aug 2026.
    // Content was always English-only; preserve indexed URLs with 308s.
    return [
      {
        // :path+ (one or more segments) so bare locale roots fall through to
        // the rule below; :path* also matches zero segments, which resolves
        // the destination to an empty Location header.
        source: "/:lang(en-US|es|fr|de|ja|zh)/:path+",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "/:lang(en-US|es|fr|de|ja|zh)",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
