import type { NextConfig } from "next";

const proxyUrl = process.env.NEXT_PUBLIC_PROXY_URL;

const proxyHostname = proxyUrl?.replace(/^https?:\/\//, "").split(":")[0];

if (!proxyHostname) {
	throw new Error(
		"NEXT_PUBLIC_PROXY_URL must be set and include a valid hostname.",
	);
}

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: proxyHostname,
			},
			{
				protocol: "https",
				hostname: proxyHostname,
			},
		],
	},
};

export default nextConfig;
